import { Router } from "express";
import multer from "multer";

import multerConfig from '../config/multer';
import * as productController from '../controllers/productController'


const upload = multer(multerConfig);

const appRoutes = Router();

//appRoutes.get('/ping', apiController.ping)

appRoutes.get('/products/:type/:page', productController.index)//listar todas pelo tipo


appRoutes.get('/products/:id', productController.show)//pegar somente um produto


appRoutes.get('/searchproducts/:name', productController.search)//pesquisa do produto


appRoutes.post('/products',  upload.fields([
        {name: "img_product", maxCount: 3}
    ]), 
    productController.create)


appRoutes.put('/products/:id', productController.update)


appRoutes.delete('/products/:id',  productController.deleteProduct) 










export default appRoutes;