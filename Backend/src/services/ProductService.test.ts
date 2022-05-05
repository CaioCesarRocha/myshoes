import { Product, ProductsInstance } from '../models/Product';
import * as ProductService from './ProductService';


describe('Testing ProductService', () =>{
    let newProduct = {
        name: "CAMISA OFICIAL PAIN GAMMING",
        old_price: 300.99,
        new_price: 240.99,
        free_freight: true
    }


    beforeAll(async ()=>{
        //await Product.sync({force: true}) //garante q deleta a tabela caso exista antes,
                                            //obs ttem q fazer o método create antes
    });

    it('should returned all products with specified type', async () =>{
        let type = 'SHIRT';
        let page = 0;

        const allProducts = await ProductService.listAllProducts(type, page);

        expect(allProducts.length).toBeGreaterThanOrEqual(1)// a lista tem q ser maior ou = 1

        expect(allProducts[0]).toHaveProperty('id')
    })


    it('should returned the product specified by id', async () =>{
        let id = 1;

        const Product = await ProductService.findProductById(id);

        expect(Product).toHaveProperty('id');
    });


    it('should updated a product', async () =>{
        let id = 1;
        const updateProduct = await ProductService.updateProduct(id, newProduct) as ProductsInstance;

        expect(updateProduct).toHaveProperty('name');
        expect(updateProduct.name).toBe(newProduct.name) //verifica se o nome mudou 
    })

})