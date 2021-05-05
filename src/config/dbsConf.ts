
/**
 *Arquivo que possui  a conexão com o banco de dados 
 *
 */


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
export const connectionDb = getConnections()