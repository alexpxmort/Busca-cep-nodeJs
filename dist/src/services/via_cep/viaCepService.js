"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ViaCepService {
    async searchCep(cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        return await axios_1.default.get(url);
    }
}
exports.default = ViaCepService;
//# sourceMappingURL=viaCepService.js.map