"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express').Router();
const endereco_service_1 = __importDefault(require("../modules/endereco/endereco.service"));
const endereco_1 = __importDefault(require("../controllers/endereco"));
const router = express;
const _enderecoConroller = new endereco_1.default(new endereco_service_1.default());
router.get('/find/:id', async (req, res) => {
    return await _enderecoConroller.findOne(req, res);
});
router.get('/teste', async (req, res) => {
    return await _enderecoConroller.teste(req, res);
});
router.post('/create', async (req, res) => {
    return await _enderecoConroller.create(req, res);
});
router.get('/all', async (req, res) => {
    return await _enderecoConroller.findAll(req, res);
});
router.put('/:id', async (req, res) => {
    return await _enderecoConroller.update(req, res);
});
router.delete('/:id', async (req, res) => {
    return await _enderecoConroller.remove(req, res);
});
module.exports = router;
//# sourceMappingURL=endereco.route.js.map