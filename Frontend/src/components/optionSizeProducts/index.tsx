import { useState } from "react";
import ButtonSizeProduct from "../buttons/buttonSizeProducts";

interface Props{
    type: 'SHOES' | 'SHIRT' | 'PANT' | 'NULL'
}

const OptionSizeProduct = (prop:Props) =>{
    const [sizeShoes, ] = useState<any[]>([
        {id: 1, size: 36},
        {id: 2, size: 38},
        {id: 3, size: 40},
        {id: 4, size: 42},
        {id: 5, size: 44}
    ])

    const [sizeShirt, ] = useState<any[]>([
        {id: 1, size: 'P'},
        {id: 2, size: 'M'},
        {id: 3, size: 'G'},
        {id: 4, size: 'GG'},
        {id: 5, size: 'EG'}
    ])



    return(
        <div className="pt-5 flex flex-row">
            { prop.type !== 'NULL'&&
                <>
                    <text className="text-xl pt-1 dark:text-white">
                        Tamanhos: 
                    </text>

                    { prop.type === 'SHOES' &&             
                        <div>
                            {sizeShoes.map(item =>{
                                return(
                                    <ButtonSizeProduct
                                        key={item.id}
                                        size={item.size}
                                    />
                                )                   
                            })}
                        </div>
                    }

                    { prop.type === 'SHIRT' &&             
                        <div>
                            {sizeShirt.map(item =>{
                                return(
                                    <ButtonSizeProduct
                                        key={item.id}
                                        size={item.size}
                                    />
                                )                   
                            })}
                        </div>
                    }
                </>
            }
        </div>
    )
}


export default OptionSizeProduct;