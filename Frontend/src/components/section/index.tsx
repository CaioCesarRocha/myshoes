import {useEffect, useState, useContext} from 'react';
import {FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import SectionItem from '../sectionItem';
import ButtonCard from '../buttons/buttonCard';
import ErrorPage from '../errorPage';
import LoadingPage from '../loadingPage';
import api from '../../services/api';
import { ContextListProducts } from "../../contexts/context_ListProducts";




interface Props {
    titleProduct: string;
    searchProduct: string;
}


const Section = (props:Props) => {
    const [listProducts, setListProducts] = useState<any[]>([]);
    const [numPage, setNumPage] = useState<number>(0);
    const [addPage] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorPage, setErrorPage] = useState<boolean>(false);
    const [didMount, setDidMount] = useState<boolean>(false);

    const { stateListProduct, dispatch} = useContext(ContextListProducts)



    useEffect(() => {     
      const loadShoes = async () =>{
        try{
            setLoading(true)
            let res = await api.get(`api/products/${props.searchProduct}/${0}`)

            setLoading(false)
            setErrorPage(false)
            setListProducts(res.data.products)
        }   
        catch(e){
            setErrorPage(true);
        }   
      }  
        loadShoes();                
    }, [props.searchProduct]);


    useEffect(() => {     
        try{
            if(didMount){
              if(stateListProduct.listProducts.listProduct.length > 0){
                setListProducts(stateListProduct.listProducts.listProduct)     
              }else{
                alert('Nennhum produto encontrado')
              }   
            }           
            setDidMount(true)      
        }   
        catch(e){
            setErrorPage(true);
        }                
    }, [stateListProduct.listProducts]); //quando a propria lista mudar (pelo search no caso)

    const pushNewPage = (addPage?: boolean) =>{      
        //PAGINAÇÃO
        let newPage = numPage;

        if(addPage){ newPage = newPage + 3; }
        else{
          if(numPage >= 3){ newPage = numPage - 3;} 
        }

        setNumPage(newPage)  

        api.get(`api/products/${props.searchProduct}/${newPage}`).then(data =>{
          if(data.data.products.length !== 0){
            setListProducts(data.data.products)
            setNumPage(newPage);
          }   
        }); 
    }
      
    return (
        <div className='dark:bg-gray-900'>
            { loading && !errorPage &&
              <LoadingPage/>
            }

            { !loading && !errorPage && 
                <>
                  <h1 className='text-4xl font-bold text-violet-900 italic m-5 sm:m-0 sm:ml-5 dark:text-white '>{props.titleProduct}</h1> 

                  <div id="SectionItem" className='max-w-6xl flex flex-col items-center sm:flex-row m-auto dark:bg-gray-900 ' >
                
                    <ButtonCard 
                      icon={<FiChevronsLeft/>}
                      onclick={() => pushNewPage()}
                    />
                
                    <div id="Item" className=' max-w-5xl  m-auto flex flex-col sm:flex-row '>       
                        {listProducts.map(item =>{        
                          return(
                            <SectionItem
                              key={item.id}
                              id={item.id}
                              imgProduct= {item.img_product}
                              name={item.name}
                              freeFreight={item.free_freight}
                              oldPrice={item.old_price}
                              newPrice={item.new_price}
                            />
                          )
                        })}      
                    </div> 
                        <ButtonCard 
                          icon={<FiChevronsRight/>}
                          onclick={() => pushNewPage(addPage)}
                        />
                  </div>      
                </>       
            }

            { errorPage &&
              <ErrorPage/>
            }
        </div>
    );
}

export default Section;