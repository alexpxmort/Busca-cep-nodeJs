"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require('supertest');
const app_1 = require("../../src/app");
const connection = require('../../src/database/index');
describe('Integration Endereco api', () => {
    it('should create a valid addres', async () => {
        const address = {
            cep: '46290000'
        };
        const response = await supertest(app_1.app)
            .post("/enderecos/create")
            .send(address);
        expect(response.status).toBe(200);
    });
});
//# sourceMappingURL=endereco.test.js.map