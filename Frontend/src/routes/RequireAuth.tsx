import {Navigate} from 'react-router-dom' 
//USANDO O COMPONENTE NAVIGATE evita que a tela pisca, como se tivesse no useEffect da outra pagina

type Props = {
    children: JSX.Element 
}

export const RequireAuth = ({children}: Props) =>{

    const isAuth = true;

    if(!isAuth){
       return <Navigate to="/"/>  //AQUI SERIA O NAVIGATE PAGE LOGIN, REDIRECIONANDO O USUÁRIO      
    }
    
    return children; //significa que o que eu colocar dentro dele sera renderizado como jsx
}