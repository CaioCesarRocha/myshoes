import express, { ErrorRequestHandler, Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { MulterError } from 'multer';
import cors from 'cors';

import appRoutes from './routes/api';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

//CONFIGS NECESSÁRIAS
server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));


//ROTAS
server.use('/api' , appRoutes); //PARA USAR ROTAS DA APP PRECISA PASSAR O API ANTES localhost:3000/api/ping


//ROTA DE NÃO ENCONTRADO
server.use((req: Request, res: Response)=>{
    res.status(404).json({error: 'Endpoint nao encontrado'})
})

//LIDANDO COM ERROS DE UPLOAD
const errorHandler: ErrorRequestHandler = (err, req, res, next ) => {
    res.status(400);// bad request

    if(err instanceof MulterError){
        res.json({error: err.code})
    }else{
        console.log(err)
        res.json({error: 'Ocorreu algum erro.'})
    }

}

server.use(errorHandler)



//CONEXÃO 
module.exports = server.listen(process.env.SERVER_PORT, () =>{
    console.log(`executando na porta ${process.env.SERVER_PORT}`)
})