import {useEffect, useState} from 'react';
import { Link} from 'react-router-dom';

interface Props{
    info?: string,
    icon: any,
    link: string,
    number?: number,
}

const Option = (prop:Props) =>{
    const [hasNumber, setHasNuumber] = useState(false)


    useEffect(() => { 
        if(prop.number !== undefined){
            setHasNuumber(true)
        }                    
    }, [prop.number]);

 
    return(
        <div id= "WishList" className='flex flex-col sm:flex-row'>
            
            <a href={prop.link} className='flex flex-row hover:font-bold'>
                <i className='text-sm sm:text-2xl'>
                    <Link to={`${prop.link}`}>{prop.icon}</Link>
                </i>
                <text className="pl-1 text-sm sm:text-xl"> {prop.info} </text>
            </a>
            
            {hasNumber ? 
                <div className="bg-red-600 px-1 h-4 rounded-full flex  ">
                    <button  
                        className="text-xs hover:font-black"
                    >
                        <Link to={`${prop.link}`} > {prop.number} </Link>
                    </button>
                </div>           
            :
                ''
            }           
        </div>
    )  
}

export default Option;