import { useEffect, useState } from "react";
import Header from "../components/header";
import OptionSizeProduct from "../components/optionSizeProducts";
import api from "../services/api";
import { useParams } from "react-router-dom";

const ShowProduct = () =>{
    const [infoProduct, setInfoProduct] = useState<any>(
        {id: '', name:'', imgProduct:'',  oldPrice: '', newPrice: '', freeFreight: false,}
    )
    const params = useParams()

    useEffect(() =>{
        console.log('id', params.id)
        api.get(`api/products/${params.id}`).then(data =>{
            console.log('result', data.data)
            if(data.data){
                setInfoProduct((prevState:any) => ({
                    ...prevState,
                    name: data.data.name,
                    imgProduct: data.data.img_product,
                    oldPrice: data.data.old_price,
                    newPrice: data.data.new_price,
                    freeFreight: data.data.free_freight
                }));
            }    
        });
    },[params.id])

    const handleCep = () =>{
        alert("Calculando CEP....")
    }

    const handleBuy = () =>{
        alert("Finalizando compra...")
    }



    return(
        <>
            <Header/>

            <div className="pt-3 text-center m-auto sm:w-full h-screen dark:bg-gray-900">
                <div className="w-80 m-auto text-center sm:w-full">
                    <text className="pl-5 text-xl w-36 sm:text-3xl font-bold dark:text-white">
                        {infoProduct.name}
                    </text>
                </div>

                <div className=" m-auto  flex flex-col sm:flex-row max-w-3xl">
                                              
                    <img 
                        className="p-5 w-64 h-64 sm:w-96 sm:h-96"
                        src={infoProduct.imgProduct}
                        alt="imagem do Produto"
                    />

                    <div className="p-5 text-left  flex flex-col">
                        <text className="text-lg dark:text-white">
                            Consulte o prazo de entrega
                        </text>
                        <div className="mt-1 flex flex-row">
                            <input
                                className="bg-gray-200 dark:bg-white px-6 rounded"
                                placeholder="Insira o CEP"
                            />
                            <button
                                className="ml-1 p-2 sm:p-3 bg-blue-600 hover:bg-blue-300 rounded"
                                onClick={() => handleCep()}
                            >
                                CONSULTAR
                            </button>
                        </div>
                        <text className="mt-3 sm:text-lg line-through dark:text-white">
                            Antigo: R$ {infoProduct.oldPrice}
                        </text>

                        <text className="mt-3 sm:text-3xl dark:text-white">
                            <text className="font-bold mr-2  text-red-700"> 
                                PROMOÇÃO:  
                            </text> 
                            R$ {infoProduct.newPrice}
                        </text>

                        {infoProduct.freeFreight && (
                            <text className="mt-3 text-green-500 font-bold">
                                FRETE GRATÍS
                            </text>
                        )}

                        {!infoProduct.freeFreight && (
                            <text className="mt-3 dark:text-white">
                                FRETE GRATÍS
                            </text>
                        )}
                        
                        <OptionSizeProduct
                            type="SHIRT"
                        />
                        
                        <button
                            className="mt-7 py-3 px-14 text-white font-bold bg-orange-500 hover:bg-orange-300 rounded"
                            onClick={() => handleBuy()}
                        >
                            COMPRAR
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ShowProduct