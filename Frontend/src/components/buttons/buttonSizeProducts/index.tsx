interface Props{
    size: string | number
}

const ButtonSizeProduct = (props:Props) =>{
    return (       
            <button
                className="ml-2 p-1 sm:p-2 w-7 sm:w-9 rounded-full bg-gray-600 hover:bg-gray-300 focus:bg-gray-300 dark:bg-white dark:hover:bg-gray-300 dark:focus:bg-gray-600 "
            >   
                <text className="text-white text-xs sm:text-lg dark:text-gray-700">
                    {props.size}
                </text>
            </button>
    )
}

export default ButtonSizeProduct