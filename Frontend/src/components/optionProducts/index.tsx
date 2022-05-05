
interface Props {
    namePage: string;
    imgProduct: string;
    onClick: () => void;
}

const OptionProducts = (props:Props) => {
    return (
        <button      
            className='text-white p-3 rounded focus:bg-violet-200 dark:focus:bg-violet-900 '
            onClick={props.onClick}
        >      
            <img 
                className="w-25 h-16 sm:w-45 sm:h-20 p-1 rounded-full bg-violet-900 hover:bg-violet-400"
                src= {props.imgProduct}
                alt="imagem do Produto"
            />
            <text
                className="font-bold text-violet-900 hover:text-violet-400 dark:text-gray-200 dark:hover:text-violet-600"
            >
                {props.namePage}  
            </text>     
        </button>
        
    )
}

export default OptionProducts;