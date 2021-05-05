
import axios from 'axios'


 export default class ViaCepService {

    async searchCep(cep){
        let url = `https://viacep.com.br/ws/${cep}/json/`

        return await axios.get(url)
    }
 }