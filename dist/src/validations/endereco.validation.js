"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaEndereco = void 0;
const yup = require('yup');
exports.schemaEndereco = yup.object().shape({
    cep: yup.string().min(1).required('O cep é obrigatório')
});
//# sourceMappingURL=endereco.validation.js.map