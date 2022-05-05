import { Product } from '../models/Product';
import { Op } from 'sequelize';


interface Product {
    name: string,
    old_price: number,
    new_price: number,
    free_freight: boolean,
    img_product?: string,
    type?: "SHIRT" | "PANT" | "SHOES"
}



export const listAllProducts = async (type: string, page: number) =>{
    let products = await Product.findAll({
        limit: 3,
        offset: page, 
        raw: true,
        where: {type}                                
    }); 

    if(products){
        const serializedProducts = products.map(product => {        
            product.img_product = `http://192.168.100.2:3000/uploads/${product.img_product}`
            return {
                ...product,
            }                                   
        })

        return serializedProducts;
    }
    return ('Nenhum produto encontrado')
    
}


export const findProductById = async( id: number) =>{
    let product = await Product.findByPk(id)  
    
    if(product){  
        product.img_product = `http://192.168.100.2:3000/uploads/${product.img_product}`
        
        return product
    }

    return ('Nenhum produto encontrado')   
}



export const findProductByName = async(name:string) =>{
    let products = await Product.findAll({
        limit: 3,
        raw: true,
        where:{
            name: { [Op.substring]: `${name}`}    
        }                            
    }); 

    if(products){
        const serializedProducts = products.map(product => {        
            product.img_product = `http://192.168.100.2:3000/uploads/${product.img_product}`
            return {
                ...product,
            }                                   
        })

        return serializedProducts
    }

    return ('Nenhum produto encontrado')
}



export const createProduct = async (product: Product) => {
    const hasProduct = await Product.findOne({where: {name: product.name}}) //verificar se ja existe no banco

    if(!hasProduct){
        try{
            let insertedProduct = await Product.create({
                name: product.name,
                old_price: product.old_price,
                new_price: product.new_price,
                free_freight: product.free_freight,
                img_product: product.img_product,
                type: product.type
            })

            return insertedProduct;    
        }catch(err){
            return new Error('Erro ao inserir o produto')
        }      
    }  

    return ('Produto já cadastrado')

    //await unlink(files.galleryproduct[0].path) //excluir o item da pasta temporaria depois de ter sido trabalhado
        /*if(files){ //array de arquivos enviados    
            files.galleryproduct.map(async (img) =>{                
                let img_url = img.filename    
                await Gallery.create({
                    id_product, img_url
                })
                //const filename = `${item.filename}.jpg`;
            })
        }*/

     
        //    
 
        //res.json({error: err})   
}



export const updateProduct = async (id: number, product: Product) => {
    let updateProduct = await Product.findByPk(id)
    
    if(updateProduct){
        updateProduct.name = product.name,
        updateProduct.old_price = product.old_price,
        updateProduct.new_price = product.new_price,
        updateProduct.free_freight = product.free_freight,

        await updateProduct.save()
        
        return updateProduct;  
    }

    return ('Produto selecionado não existe')
}



export const deleteProduct = async (id: number) => {

    return await Product.destroy({where: {id}})
}


