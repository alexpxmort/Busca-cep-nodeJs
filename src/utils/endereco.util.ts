/**
 * Classe de Utilidades da Classe Endereco
 * 
 */


 class EnderecoUtil{

    formatObject (obj){
        return JSON.parse(JSON.stringify(obj));
     }
}


module.exports = new EnderecoUtil();