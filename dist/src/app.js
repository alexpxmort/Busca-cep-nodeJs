"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routesIndex_1 = require("../src/routes/routesIndex");
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.app = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
    }
    routes() {
        let routes = routesIndex_1.ROUTES;
        routes.forEach((val) => {
            this.app.use(`/${val.nome}`, val.path);
        });
    }
}
exports.app = new App().app;
//# sourceMappingURL=app.js.map