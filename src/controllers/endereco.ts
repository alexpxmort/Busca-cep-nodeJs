/**
 * Controller de Endereço responsável pelas por
 * responser as resquisições HTTP
 */


 import EnderecoService from "../modules/endereco/endereco.service";
 import {schemaEndereco} from '../validations/endereco.validation'
 const EnderecoUtil  = require('../utils/endereco.util')
 import * as Yup from 'yup'
 import ViaCepService from '../services/via_cep/viaCepService'
 const cache = require('../lib/cache')


 import { Request,Response } from 'express';
import { object } from "yup/lib/locale";

 
 
   export default class EnderecoController {
     constructor(private readonly EnderecoService: EnderecoService) {}
 
     teste(req:Request,res:Response){
         return res.status(200).json(
             {
                 'msg':'Rota Endereço Works!'
             }
         ) 
     }
   
     async create(req:Request,res:Response) {
       let{data} = req.body
       let dataObj = ( data!=undefined && Object.keys(data).length > 0)?data:req.body
       try{
              await  schemaEndereco.validate(dataObj,{abortEarly:false});
                  const cached = await cache.get(`${Object.keys(dataObj)}:${dataObj.cep}`);

                  if(cached){
                    return res.status(200).json({endereco:cached,error:false}); 
                  }

                  let _cep = await new ViaCepService().searchCep(dataObj.cep)

                  let _endereco = {};

                  let _enderecoDb = await this.EnderecoService.findByCep(dataObj.cep);

                  if(_enderecoDb){
                      _endereco = _enderecoDb;
                  }else{
                    console.log(_cep.data)
                    let  enderecoCreated = await this.EnderecoService.create(_cep.data);

                    _endereco = enderecoCreated;
                  }

                  cache.set(`${Object.keys(dataObj)}:${dataObj.cep}`,_endereco,60*15);

                  return res.status(200).json({endereco:_endereco,error:false});    

       }catch(err){
         let errorMessages = {};
 
         if(err instanceof Yup.ValidationError){
           err.inner.forEach((error) => {
             errorMessages[error.path] = error.message;
           })
         }

         if(Object.keys(errorMessages).length > 0){
          return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
         }else{
          return res.status(400).json({'msg':`Erro ao criar Endereço: ${err.message}`,error:true});
         }

       }
 
     }
   
     async findAll(req:Request,res:Response) {
       let enderecos = await this.EnderecoService.findAll();
       
       return res.status(200).json({enderecos:enderecos,error:false});
     }
   
     async findOne(req:Request,res:Response) {
 
       const {id} = req.params;
       let endereco = await this.EnderecoService.findOne(+id);
 
       if(!endereco){
         return res.status(404).json({'msg':'Endereço Não encontrado!',error:true});
       }
 
 
       return res.status(200).json({endereco,error:false});
     }
   
     async update(req:Request,res:Response) {
       const {id} = req.params;
       let endereco = await this.EnderecoService.findOne(+id);
 
       if(!endereco){
         return res.status(404).json({'msg':'Endereço Não encontrado!',error:true});
       }
 
       let{data} = req.body
 
       let dataObj = ( data!=undefined && Object.keys(data).length > 0)?data:req.body
 
       try{
         await  schemaEndereco.validate(dataObj,{abortEarly:false});
         try{
         await this.EnderecoService.update(+id,dataObj);
         return res.status(200).json({'msg':'Endereço Atualizado com Sucesso! ',error:false,endereco:endereco});
       }catch(err){
         return res.status(400).json({'msg':`error ao atualizar endereço: ${err.message}`,error:true});
       }
       }catch(err){
         let errorMessages = {};
 
         if(err instanceof Yup.ValidationError){
           err.inner.forEach((error) => {
             errorMessages[error.path] = error.message;
           })
         }
         return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
       }
 
     }
   
     async remove(req:Request,res:Response) {
       const {id} = req.params;
       let endereco = await this.EnderecoService.findOne(+id);
 
       if(!endereco){
         return res.status(404).json({'msg':'Endereço Não encontrado!',error:true});
       }
 
       try{
         await this.EnderecoService.remove(+id);
         return res.status(200).json({'msg':'Endereço deletado Com Sucesso!',error:false});
       }catch(err){
         return res.status(400).json({'msg':`Erro ao deletar endereço: ${err.message}`,error:true});
       }
     }
   }