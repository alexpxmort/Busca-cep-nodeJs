/***
 * Classe uqe inicia com os middlewares e rotas para ser usada ao startar o servidor
 */

 import express from 'express'
import cors from 'cors'
import {ROUTES} from '../src/routes/routesIndex'
 import bodyParser from 'body-parser';

  class App {
    public app;
     constructor(){
         this.app = express()
         this.middlewares();
         this.routes();
     }
 
     middlewares(){
         this.app.use(express.json())
         this.app.use(cors())
         this.app.use(bodyParser.urlencoded({ extended: false }));
         this.app.use(bodyParser.json());
     }
 
     routes(){
         let routes = ROUTES;
 
         routes.forEach((val)=>{
             this.app.use(`/${val.nome}`,val.path);
         })
     }
 }
 
 export  const app = new App().app