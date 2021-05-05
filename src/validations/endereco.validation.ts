
/**
 * Arquivo de configuração de validação de Endereco
 * 
 */


 const yup   =require('yup')
 export const schemaEndereco =  yup.object().shape({
     cep:yup.string().min(1).required('O cep é obrigatório')
 });