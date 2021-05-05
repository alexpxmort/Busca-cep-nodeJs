/**
 * Rotas com metódos a ser utilizados na rota enderecos
 * Os Metódos permitidos sao GET,POST,PUT,DELETE
 */

 const express = require('express').Router();
 import EnderecoService from '../modules/endereco/endereco.service'
 import EnderecoController from '../controllers/endereco' 
 const router = express;
 import { Request,Response } from 'express';

 const _enderecoConroller = new EnderecoController(new EnderecoService());
 
 router.get('/find/:id',async(req:Request,res:Response)=>{
   return await _enderecoConroller.findOne(req,res);
});
 router.get('/teste',async(req:Request,res:Response)=>{
    return await _enderecoConroller.teste(req,res);
 });
 
 router.post('/create',async(req:Request,res:Response)=>{
    return await _enderecoConroller.create(req,res);
 });
 
 router.get('/all',async(req:Request,res:Response)=>{
   return await _enderecoConroller.findAll(req,res);
});

 router.put('/:id',async(req:Request,res:Response)=>{
     return await _enderecoConroller.update(req,res);
  });
 

 router.delete('/:id',async(req:Request,res:Response)=>{
    return await _enderecoConroller.remove(req,res);
 });



 module.exports = router;