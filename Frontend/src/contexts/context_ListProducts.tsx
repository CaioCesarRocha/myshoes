import { createContext, useReducer } from "react";
import { listProductsState, listProductsInitialState, ActionType, ListProductsReducer } from "../reducers/listProducts"


type initialStateType = {
    listProducts: listProductsState
}

type ContextType = {
    stateListProduct: initialStateType,
    dispatch: React.Dispatch<any>,
}

const initialState = {
    listProducts: listProductsInitialState
}


export const ContextListProducts =  createContext<ContextType>({
    stateListProduct: initialState,
    dispatch: () => null
});


const mainReducer = (stateListProduct:initialStateType, action: ActionType) => ({
    listProducts: ListProductsReducer(stateListProduct.listProducts, action),   
});

export const ContextListProductsProvider: React.FC = ({ children }) =>{
    const [stateListProduct, dispatch] = useReducer(mainReducer, initialState)
    return (
        <ContextListProducts.Provider value={{stateListProduct, dispatch}}>
            {children}
        </ContextListProducts.Provider>
    );
}


