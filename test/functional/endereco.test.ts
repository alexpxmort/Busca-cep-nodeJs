
/**
 * Arquivos onde são realizados os testes da aplicação
 */


const supertest = require('supertest');

import {app} from '../../src/app'



const connection = require('../../src/database/index'); 
 
 
 describe('Integration Endereco api',()=>{
 
     it('should create a valid addres',async ()=>{
         const address = {
             cep:'46290000'
         };
 
         const response = await supertest(app)
         .post("/enderecos/create")
         .send(address);

 
         expect(response.status).toBe(200)
         expect(response.body.error).toBe(false)
     })


     
     it('should thow an error wrong format cep',async ()=>{
        const address = {
            cep:'141x4555'
        };

        const response = await supertest(app)
        .post("/enderecos/create")
        .send(address);

        expect(response.status).toBe(400)
        expect(response.body.error).toBe(true)
    })


    it('should thow an error invalid fields',async ()=>{
        const address = {
            
        };

        const response = await supertest(app)
        .post("/enderecos/create")
        .send(address);

        expect(response.status).toBe(400)
        expect(response.body.error).toBe(true)
    })
 })