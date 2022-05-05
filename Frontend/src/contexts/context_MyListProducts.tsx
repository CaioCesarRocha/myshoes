import { createContext, useReducer } from "react";
import { myListProductState, myListProductsInitialState, ActionType, myListProductsReducer } from "../reducers/myListProducts"


type initialStateType = {
    myListProducts: myListProductState,
}

type ContextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>,
}

const initialState = {
    myListProducts: myListProductsInitialState,
}


export const ContextMyListProducts =  createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});


const mainReducer = (state:initialStateType, action: ActionType) => ({
    myListProducts: myListProductsReducer(state.myListProducts, action),
    
});

export const ContextMyListProvider: React.FC = ({ children }) =>{
    const [state, dispatch] = useReducer(mainReducer, initialState)
    return (
        <ContextMyListProducts.Provider value={{state, dispatch}}>
            {children}
        </ContextMyListProducts.Provider>
    );
}


