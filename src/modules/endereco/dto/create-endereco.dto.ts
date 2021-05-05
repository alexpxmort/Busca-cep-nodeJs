/**
 * Interface de criação de Endereco
 * 
 */

 export interface ICreateEnderecoRequestDto   {
   cep:string;
   logradouro:string;
   complemento:string;
   bairro:string;
   uf:string;
   ibge:string;
   gia:string;
   ddd:string;
   siafi:string;
   localidade:string;
   
}