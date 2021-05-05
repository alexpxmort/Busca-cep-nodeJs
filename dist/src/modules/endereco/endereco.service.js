"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const endereco_1 = require("../../models/endereco");
const EnderecoUtil = require('../../utils/endereco.util');
class EnderecoService {
    async create(createEnderecoDto) {
        createEnderecoDto.cep = createEnderecoDto.cep.replace(/-/g, '');
        return await endereco_1.enderecoDb.create(createEnderecoDto);
    }
    async findAll() {
        return EnderecoUtil.formatObject(await endereco_1.enderecoDb.findAll());
    }
    async findOne(id) {
        return EnderecoUtil.formatObject(await endereco_1.enderecoDb.findOne({ where: { id: id } }));
    }
    async findByCep(cep) {
        return EnderecoUtil.formatObject(await endereco_1.enderecoDb.findOne({ where: { cep: cep } }));
    }
    async update(id, updateEnderecoDto) {
        return await endereco_1.enderecoDb.update(updateEnderecoDto, { where: { id: id } });
    }
    async remove(id) {
        return await endereco_1.enderecoDb.destroy({
            where: { id: id }
        });
    }
}
exports.default = EnderecoService;
//# sourceMappingURL=endereco.service.js.map