"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const endereco_validation_1 = require("../validations/endereco.validation");
const EnderecoUtil = require('../utils/endereco.util');
const Yup = __importStar(require("yup"));
const viaCepService_1 = __importDefault(require("../services/via_cep/viaCepService"));
const cache = require('../lib/cache');
class EnderecoController {
    constructor(EnderecoService) {
        this.EnderecoService = EnderecoService;
    }
    teste(req, res) {
        return res.status(200).json({
            'msg': 'Rota Endereço Works!'
        });
    }
    async create(req, res) {
        let { data } = req.body;
        let dataObj = (data != undefined && Object.keys(data).length > 0) ? data : req.body;
        try {
            await endereco_validation_1.schemaEndereco.validate(dataObj, { abortEarly: false });
            try {
                try {
                    const cached = await cache.get(`${Object.keys(dataObj)}:${dataObj.cep}`);
                    if (cached) {
                        return res.status(200).json({ endereco: cached, error: false });
                    }
                    let _cep = await new viaCepService_1.default().searchCep(dataObj.cep);
                    let _endereco = {};
                    let _enderecoDb = await this.EnderecoService.findByCep(dataObj.cep);
                    if (_enderecoDb) {
                        _endereco = _enderecoDb;
                    }
                    else {
                        let enderecoCreated = await this.EnderecoService.create(_cep.data);
                        _endereco = enderecoCreated;
                    }
                    cache.set(`${Object.keys(dataObj)}:${dataObj.cep}`, _endereco, 60 * 15);
                    console.log(_endereco);
                    return res.status(200).json({ endereco: _endereco, error: false });
                }
                catch (err) {
                    return res.status(400).json({ 'msg': `Erro ao criar endereço: ${err.message}`, error: true });
                }
            }
            catch (err) {
                return res.status(400).json({ 'msg': `Erro ao criar endereço: ${err.message}`, error: true });
            }
        }
        catch (err) {
            let errorMessages = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
            }
            return res.status(400).json({ msg: 'Dados inválidos', error: true, erros: errorMessages });
        }
    }
    async findAll(req, res) {
        let enderecos = await this.EnderecoService.findAll();
        return res.status(200).json({ enderecos: enderecos, error: false });
    }
    async findOne(req, res) {
        const { id } = req.params;
        let endereco = await this.EnderecoService.findOne(+id);
        if (!endereco) {
            return res.status(404).json({ 'msg': 'Endereço Não encontrado!', error: true });
        }
        return res.status(200).json({ endereco, error: false });
    }
    async update(req, res) {
        const { id } = req.params;
        let endereco = await this.EnderecoService.findOne(+id);
        if (!endereco) {
            return res.status(404).json({ 'msg': 'Endereço Não encontrado!', error: true });
        }
        let { data } = req.body;
        let dataObj = (data != undefined && Object.keys(data).length > 0) ? data : req.body;
        try {
            await endereco_validation_1.schemaEndereco.validate(dataObj, { abortEarly: false });
            try {
                await this.EnderecoService.update(+id, dataObj);
                return res.status(200).json({ 'msg': 'Endereço Atualizado com Sucesso! ', error: false, endereco: endereco });
            }
            catch (err) {
                return res.status(400).json({ 'msg': `error ao atualizar endereço: ${err.message}`, error: true });
            }
        }
        catch (err) {
            let errorMessages = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
            }
            return res.status(400).json({ msg: 'Dados inválidos', error: true, erros: errorMessages });
        }
    }
    async remove(req, res) {
        const { id } = req.params;
        let endereco = await this.EnderecoService.findOne(+id);
        if (!endereco) {
            return res.status(404).json({ 'msg': 'Endereço Não encontrado!', error: true });
        }
        try {
            await this.EnderecoService.remove(+id);
            return res.status(200).json({ 'msg': 'Endereço deletado Com Sucesso!', error: false });
        }
        catch (err) {
            return res.status(400).json({ 'msg': `Erro ao deletar endereço: ${err.message}`, error: true });
        }
    }
}
exports.default = EnderecoController;
//# sourceMappingURL=endereco.js.map