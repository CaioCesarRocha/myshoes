import {Request, Response} from 'express'
import { unlink } from 'fs/promises'

import * as ProductService from '../services/ProductService'

//CONTROLLERS: verificam campos, roda o service, dá o retorno.

export const index = async (req: Request, res: Response) => {
    if(req.params.type && req.params.page){
        const type = req.params.type
        const page = (+req.params.page) // diz que o resultado sera um number

        const listProduct = await ProductService.listAllProducts(type, page)

        return res.status(200).json({products: listProduct} ) 
    }
    
    return res.status(400).json('Parâmetros inválidos')  
}


export const show = async (req: Request, res: Response) => {
    if(req.params.id){
        const id = (+req.params.id)

        const product = await ProductService.findProductById(id)

        return res.status(200).json(product)
    }

    return res.status(400).json('Parâmetros inválidos')  
}


export const search = async (req: Request, res: Response) => {
    if(req.params.name){
        let {name} = req.params
        name = name.toUpperCase();
        
        const products = await ProductService.findProductByName(name)

        return res.status(200).json({products: products});
    }

    return res.status(400).json('Parâmetros inválidos');    
}



export const create = async (req: Request, res: Response) => {
    
    if(req.body.name && req.body.old_price && req.body.new_price){
        let {name, old_price, new_price, free_freight, type } = req.body

        if(free_freight === "true") free_freight = true
        else{free_freight = false}

        const files = req.files as { [fieldname: string]: Express.Multer.File[]}// pro TS parar de "reclamar"]
        
        const img_product = files.img_product[0].filename

        const product = {name, old_price, new_price, free_freight, type, img_product}

        const createdProduct = await ProductService.createProduct(product)

        return res.status(201).json(createdProduct)
    }

    return res.status(400).json('Parâmetros inválidos');   
        
}


export const update = async (req: Request, res: Response) => {
    if(req.params && req.body.name){
        const id = (+req.params.id)

        let {name, old_price, new_price, free_freight, type } = req.body

        const product = {name, old_price, new_price, free_freight, type}
        
        const updatedProduct = await ProductService.updateProduct(id, product)

        return res.status(201).json(updatedProduct)
    }

    return res.status(400).json('Parâmetros inválidos');   
    
}


export const deleteProduct = async (req: Request, res: Response) => {
    if(req.params.id){
        let id = (+req.params.id)

        const deletedProduct = await ProductService.deleteProduct(id)

        return res.status(200).json(deletedProduct);  
    }

    return res.status(400).json('Parâmetros inválidos'); 
}


