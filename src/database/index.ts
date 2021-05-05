/**
 * Arquivo onde starta a conexao do banco de Dados
 */
 const Sequelize = require('sequelize');
import{DbConfig} from '../config/database' 
 import {enderecoDb} from '../models/endereco'
 
 const connection = new Sequelize(DbConfig);
 
 enderecoDb.init(connection);
 

 module.exports = connection;