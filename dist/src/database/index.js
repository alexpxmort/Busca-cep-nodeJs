"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const database_1 = require("../config/database");
const endereco_1 = require("../models/endereco");
const connection = new Sequelize(database_1.DbConfig);
endereco_1.enderecoDb.init(connection);
module.exports = connection;
//# sourceMappingURL=index.js.map