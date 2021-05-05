"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDb = void 0;
const getConnections = () => {
    return {
        DB_MYSQL_HOST: "localhost",
        DB_MYSQL_PORT: 3306,
        DB_MYSQL_USER: "root",
        DB_MYSQL_PASSWORD: "aquela123",
        DB_MYSQL_DBNAME: "teste_cep",
        DB_MYSQL_TIMEOUT: 10000000
    };
};
exports.connectionDb = getConnections();
//# sourceMappingURL=dbsConf.js.map