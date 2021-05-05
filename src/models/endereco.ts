/**
 * Modelo do banco de dados para salvar as informações do endereco
 */

 const {Model,DataTypes} = require('sequelize');

 export default class Endereco extends Model{
     static init(sequelize: any){
         super.init({
             cep: {
                 field: 'cep',
                 type: DataTypes.STRING,
             },
             logradouro: {
                 type: DataTypes.STRING,
                 field: 'logradouro',
             },
             complemento: {
                 type: DataTypes.STRING,
                 field: 'complemento',
             },
             bairro: {
                type: DataTypes.STRING,
                field: 'bairro',
            },
            localidade: {
                type: DataTypes.STRING,
                field: 'localidade',
            },
            uf: {
                type: DataTypes.STRING,
                field: 'uf',
            },
            ibge: {
                type: DataTypes.STRING,
                field: 'ibge',
            },
            gia: {
                type: DataTypes.STRING,
                field: 'gia',
            },
            ddd: {
                type: DataTypes.STRING,
                field: 'ddd',
            },
            siafi: {
                type: DataTypes.STRING,
                field: 'siafi',
            },

            createdAt: {
                field: 'created_at',
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
                field: 'updated_at',
            },
         },
         {
             sequelize,
             freezeTableName: true,
             tableName: 'enderecos',
         })
     }
 
    
 }
 
 export const enderecoDb = Endereco