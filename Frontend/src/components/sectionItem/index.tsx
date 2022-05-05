import { useContext } from "react";
import { ContextMyListProducts } from "../../contexts/context_MyListProducts";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {useNavigate} from 'react-router-dom'


interface Props {
    imgProduct: string,
    name: string,
    oldPrice: string,
    newPrice: string,
    freeFreight: boolean
    id: string
}

const SectionItem = (props:Props) =>{
    const {state , dispatch} = useContext(ContextMyListProducts)
    
    const navigate = useNavigate();
  

    const handleNavigateToProduct = () =>{
        if(props.id) navigate(`/showProduct/${props.id}`)
        else alert('Não foi possível selecionar o produto')            
    }

    const handleAddList = () =>{
        if(props.name && props.imgProduct){
            dispatch({
                type: 'ADD',
                payload:{
                    name: props.name,
                    img: props.imgProduct
                }
            })
        }      
    }


    return(
        
        <div id="content" className="font-bold ml-8 max-w-xs flex flex-col">
            
            <img 
                className=" max-h-60 w-64 sm:max-w-xs sm:h-80"
                src={props.imgProduct}
                alt="Imagem do produto"
            />
            <button 
                className="w-64  h-16 "
                onClick={() => handleNavigateToProduct()}
            > 
                <text className="hover:text-gray-400 text-base font-bold dark:text-white dark:hover:text-violet-500">
                    {props.name}
                </text>
            </button>

            { props.freeFreight ? 
                <text className="text-green-500 font-bold"> FRETE GRATÍS</text>
            :
                <text className="font-bold dark:text-white"> FRETE INCLUSO</text>
            }
            <div className="flex flex-row  ">
                <text className="text-sm line-through hover:text-lg dark:text-white"> R$ {props.oldPrice}</text>
                <button
                    className="text-1xl p-1 rounded-full bg-green-800 text-white hover:bg-green-400 ml-36 dark:text-white"
                    onClick={() => handleAddList()}
                >
                   <MdOutlineAddShoppingCart/>                  
                </button>
            </div>
            
            <text className="text-lg hover:text-2xl dark:text-white"> R$ {props.newPrice} </text>
        </div>
    )
}

export default SectionItem;