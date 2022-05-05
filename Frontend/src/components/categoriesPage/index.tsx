import { useState } from 'react';
import Section from '../section';
import OptionProducts from "../optionProducts";

interface InfoPages{
    title: 'Calçados' | 'Blusas' | 'Calças',
    searchProduct: 'SHOES' | 'SHIRT' | 'PANT'
}

const CategoriesPage = () =>{

    const [infoPage, setInfoPage] = useState<InfoPages>({
        title: 'Blusas',
        searchProduct: 'SHIRT'
    })
    
    const setPage = (props:InfoPages) =>{
        setInfoPage(props)
    }


    return(
        <>                 
            <div className='bg-gray-200 dark:bg-gray-900 '>
               
                <OptionProducts
                    namePage='Blusas'
                    imgProduct='https://static.netshoes.com.br/bnn/l_netshoes/2021-02-25/3171_menu_promocoes.png'
                    onClick={() => setPage({title:'Blusas', searchProduct:'SHIRT'})}      
                />

                <OptionProducts
                    namePage='Calças'
                    imgProduct='https://static.netshoes.com.br/banners/l_netshoes/2019-04-17/5347_categorias_2.png'
                    onClick={() => setPage({title:'Calças', searchProduct:'PANT'})}      
                /> 
                
                 <OptionProducts
                    namePage='Calçados'
                    imgProduct='https://static.netshoes.com.br/bnn/l_netshoes/2019-02-01/3449_Calcados.jpg'
                    onClick={() => setPage({title:'Calçados', searchProduct:'SHOES'})}      
                />
                  
            </div> 

            <Section titleProduct={infoPage.title} searchProduct={infoPage.searchProduct}/>                            
        </>
    );
}

export default CategoriesPage;