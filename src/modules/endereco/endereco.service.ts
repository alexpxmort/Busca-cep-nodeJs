/**
 * Service com funções de CRUD de Endereco
 * 
 */



 import {enderecoDb} from '../../models/endereco';
 const EnderecoUtil  = require('../../utils/endereco.util')
 import {ICreateEnderecoRequestDto } from './dto/create-endereco.dto';
 import { IUpdateEnderecoRequestDto } from './dto/update-endereco.dto';
 
 export default class EnderecoService {
   async create(createEnderecoDto: ICreateEnderecoRequestDto) {
     createEnderecoDto.cep = createEnderecoDto.cep.replace(/-/g, '')
     return await enderecoDb.create(createEnderecoDto)
   }
 
   async findAll() {
     return EnderecoUtil.formatObject(await enderecoDb.findAll());
   }
 
   async findOne(id: number) {
     return  EnderecoUtil.formatObject( await enderecoDb.findOne({ where: { id: id} }));
   }

   async findByCep(cep: string) {
    return  EnderecoUtil.formatObject( await enderecoDb.findOne({ where: { cep: cep} }));
  }
 
   async update(id: number, updateEnderecoDto: IUpdateEnderecoRequestDto) {
     return await   enderecoDb.update(updateEnderecoDto,{where:{id:id}})
   }
 
  async remove(id: number) {
    return await enderecoDb.destroy({
      where:{id:id}
    });
   }
 }