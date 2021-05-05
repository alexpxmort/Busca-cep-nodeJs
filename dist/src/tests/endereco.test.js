"use strict";
const req = require('supertest');
const appX = require('../app');
describe('Integration Endereco api', () => {
    it('should create a valid addres', async () => {
        const address = {
            cep: '46290000'
        };
        const response = await req(appX)
            .post("/enderecos/create")
            .send(address);
        expect(response.status).toBe(200);
    });
});
//# sourceMappingURL=endereco.test.js.map