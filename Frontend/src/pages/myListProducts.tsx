import Header from "../components/header";
import { useContext } from "react";
import { ContextMyListProducts } from "../contexts/context_MyListProducts";

import { FiDelete, FiArrowLeft} from "react-icons/fi";
import { Link } from 'react-router-dom';

const MyListProducts = () =>{
    const {state, dispatch} = useContext(ContextMyListProducts);


    const handleDelItem = (id: string) =>{
        dispatch({
            type: 'DEL',
            payload:{
                id: id
            }
        })
    }


    const handleCloseBuy = () =>{
        alert("Compra finalizada")
    }

    
    return(
        <div className="dark:h-screen dark:bg-gray-900">
            
            <Header/>
            {state.myListProducts.myList.length > 0 &&
                <>  
                    <i className="pt-3 text-3xl sm:text-5xl float-right sm:pr-20 text-violet-900 hover:text-violet-500 dark:text-white">
                        <Link to="/"> <FiArrowLeft/> </Link>
                    </i>
                    <h1 className= "text-center text-violet-800 mt-5 font-bold italic text-2xl sm:text-3xl dark:text-white " > 
                    Produtos no Carrinho
                    </h1>
                    <div id="Item" className='sm:max-w-7xl overflow-auto h-2/3 m-auto flex flex-col sm:flex-row '>
                        {state.myListProducts.myList.map((item) => {
                            return (                   
                                <div key={item.id} className="mt-5 ml-8 sm:ml-24 max-w-xs flex flex-col">
                                    <div className="flex flex-row ">
                                        <img 
                                            src={item.img} 
                                            alt="imgProduto" 
                                            className="sm:max-h-60 sm:max-h-60 w-56 sm:w-64 sm:max-w-xs sm:h-80" 
                                        />
                                        <button
                                            className="mb-48 text-4xl text-red-700 pl-3 hover:text-red-400 dark:text-red-500 dark:hover:text-red-300"
                                            onClick={() => handleDelItem(item.id)}
                                        >
                                            <FiDelete/>
                                        </button> 
                                    </div>                
                                    <text className="font-bold dark:text-white ">
                                        {item.name}
                                    </text>
                                    <button
                                            className="text-white w-48 mt-2  bg-green-600 hover:bg-green-300 rounded p-2"
                                            onClick={() => handleCloseBuy()}
                                        >
                                            Finalizar Compra
                                    </button>                                                 
                                </div>                    
                            )
                        })}
                    </div> 
                </>
            }
            {state.myListProducts.myList.length === 0 &&
                <div className="text-center p-5 dark:h-screen dark:bg-gray-900">
                    <i className="pt-3 text-3xl sm:text-5xl float-right sm:pr-20 text-violet-900 hover:text-violet-500 dark:text-white">
                        <Link to="/"> <FiArrowLeft/> </Link>
                    </i>
                    <div className="pt-20">
                        <text
                            className="text-3xl sm:text-6xl font-bold pt-20 text-violet-900 dark:text-white"
                        >
                            Lista Vazia...                      
                        </text>
                    </div>
                </div>
            }

        </div>
    );
}

export default MyListProducts;