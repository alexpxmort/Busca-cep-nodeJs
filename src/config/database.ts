
/**
 * Arquivo que cria um obejto baseado na nossa configuração do banco de dados
 */

 import {connectionDb} from './dbsConf'
 export const DbConfig ={
     dialect:'mysql',
     host:connectionDb.DB_MYSQL_HOST,
     username:connectionDb.DB_MYSQL_USER,
     password:connectionDb.DB_MYSQL_PASSWORD,
     database:connectionDb.DB_MYSQL_DBNAME,
     define:{
         timestamps:true,
         underscored:true
     }
 }
 
 