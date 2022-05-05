export type Product = {
    id: string,
    name: string, 
    old_price: number,
    new_price: number,
    free_freoght: boolean
    img_product: string,
}


export type listProductsState = {
    listProduct: Product[]
}

export type ActionType = {
    type: string
    payload?: {
        filterProducts?: Product[],
    }
}

export const listProductsInitialState:listProductsState = 
    {
        listProduct: []
    };


export const ListProductsReducer = (stateListProduct: listProductsState, action: ActionType) => {
    switch(action.type){ 
        case 'ADD':
            if(action.payload?.filterProducts) {// só passa daqui se existir um name e img]
                const newState = {...stateListProduct}
               
                newState.listProduct = [...action.payload?.filterProducts]   

                return newState;             
            }          
        break;
    }
    return stateListProduct;
}
