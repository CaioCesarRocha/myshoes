

interface Props{
    onclick: any;
    icon: any;
}

const ButtonCard = (props: Props) =>{
    return(
        
        <button 
          className='text-6xl text-violet-900 hover:text-violet-400 sm:ml-5 dark:text-gray-200'
          onClick={props.onclick}
        >
            {props.icon}
        </button>
    )
}

export default ButtonCard;