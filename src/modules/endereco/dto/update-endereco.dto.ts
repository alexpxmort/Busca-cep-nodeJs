/**
 * Interface de Atualização de Endereco
 * 
 */

 import { ICreateEnderecoRequestDto } from "./create-endereco.dto";

 export interface IUpdateEnderecoRequestDto extends ICreateEnderecoRequestDto {
       id:string;
 }