import { ChangeEvent, useState, useEffect, useContext} from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingCart} from "react-icons/fi";
import DarkModeToggle from "react-dark-mode-toggle";

import api from "../../services/api";
import OptionHeader from "../optionHeader";
import { ContextMyListProducts } from "../../contexts/context_MyListProducts";
import { ContextListProducts } from "../../contexts/context_ListProducts";
import { useAppSelector} from '../../redux/hooks/useAppSelector'
import { setThemeStatus } from "../../redux/reducers/themeReducer";
import { useDispatch } from "react-redux";


const Header = () =>{

    //ESTADO VINDO PELA CRIAÇÃO DO REDUX (LIDAR COM O TEMA)
    const theme = useAppSelector(state => state.theme)
    const dispatchTheme = useDispatch();


    //ESTADO VINDO PELO CONTEXT API (LIDAR COM LISTA DE PRODUTOS)
    const { state} = useContext(ContextMyListProducts)
    const { stateListProduct, dispatch} = useContext(ContextListProducts)

    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [numProducts, setNumProducts] = useState<number>(0)
    const [search, setSearch] = useState<string>('')

    useEffect(() =>{
      setNumProducts(state.myListProducts.count)
    }, [state.myListProducts]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>{   
      setSearch(e.target.value)
    }

    const searchProduct = (search: string) =>{
      /*if(search !== ''){
        try{
          api.get(`api/searchproducts/${search}`).then(data =>{
            console.log('produtos', data.data.products)
            dispatchListProduct({
              type: 'ADD',
                payload:{
                  filterProducts: data.data.products
                }
            })      
          })
        }catch(err){
          alert('Pesquisa não disponível...')
        }
      }else{
          alert('digite alguma coisa no campo')
      }*/
      
    }


    const switchTheme = (newTheme: boolean) => dispatchTheme(setThemeStatus(newTheme))

    const handleSwitchTheme = () => {
      
      switchTheme(theme.isDark === false ? true : false)

      setIsDarkMode(isDarkMode === false ? true : false)
    }


    return(
        <header className='bg-violet-800 text-white w-full p-3 sm:p-5 flex sm:justify-between '>

        <div className="w-full flex flex-col sm:flex-row ">
          <div className="justify-between flex flex-row sm:flex-col">
            <a href="http://localhost:3001/" className='font-bold  text-lg sm:text-2xl italic hover:text-gray-300'>
              MyShoes
            </a>
            <div className="sm:mt-2 flex flex-row">
              <text className="">Tema:</text>  
              <DarkModeToggle 
                className="ml-1 mt-1"
                onChange={() => handleSwitchTheme()}
                checked={isDarkMode}
                size={40}
              />
            </div>
          </div> 
          
          <div className='sm:m-auto p-2 sm:pt-0'>
            <input 
              className='outline-none border border-transparent align-middle h-11 text-gray-600 font-bold p-2 sm:px-14  rounded-l-full'
              placeholder='O que você procura?'
              type="text"
              value={search}
              onChange={handleSearchChange}        
            />
            <button 
              className="align-middle h-11 p-2 text-2xl bg-white text-violet-900 hover:bg-violet-300 hover:text-white rounded-r-full"
              onClick={() => searchProduct(search)}
            >
              
              {<FiSearch/>}
            </button>
          </div>
          
          <div id="Options" className=" flex pt-3 pr-3 sm:pr-0 w-full justify-between sm:w-5/12  ">
            <OptionHeader info='Lista de Desejos' link="http://localhost:3001/" icon={<FiHeart/>} />

            <OptionHeader info='Entrar' link="http://localhost:3001/" icon={<FiUser/>} />

            <OptionHeader number={numProducts} link="/myListProducts" icon={<FiShoppingCart/>} />
          </div>
        </div> 

      </header>
    )
}

export default Header;