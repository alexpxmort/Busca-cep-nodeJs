"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConfig = void 0;
const dbsConf_1 = require("./dbsConf");
exports.DbConfig = {
    dialect: 'mysql',
    host: dbsConf_1.connectionDb.DB_MYSQL_HOST,
    username: dbsConf_1.connectionDb.DB_MYSQL_USER,
    password: dbsConf_1.connectionDb.DB_MYSQL_PASSWORD,
    database: dbsConf_1.connectionDb.DB_MYSQL_DBNAME,
    define: {
        timestamps: true,
        underscored: true
    }
};
//# sourceMappingURL=database.js.map