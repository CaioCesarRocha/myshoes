import { unlink } from 'fs/promises'
import {Request, Response} from 'express'

import { Product } from '../models/Product'

export const Math = {
    sum: (n1: number, n2: number) => {
        return n1 + n2;
    }
}


/*export const uploadFile = async (req: Request, res: Response) => {
    //PODE-SE USAR A BIBLIOTECA SHARP PARA MANIPULAR AS IMAGENS (TAMANHO, RESOLUÇÃO ETC...)

    const files = req.files as { [fieldname: string]: Express.Multer.File[]}// pro TS parar de "reclamar"]

    let readyImgs: any[] = []

    if (files){ //array de arquivos enviados
        
        files.galleryproduct.map(async (item) =>{          
            const filename = `${item.filename}.jpg`;
            readyImgs.push(filename)
            await unlink(item.path) //excluir o item da pasta temporaria depois de ter sido trabalhado.
        })
        
        res.json({image: readyImgs})
    }else{
        res.status(400);
        res.json({error: 'Arquivo inválido'})
    }
     
}*/


