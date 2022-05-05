import {v4 as uuidv4} from 'uuid';

export type Product = {
    id: string,
    name: string, 
    img: string,
}


export type myListProductState = {
    count: number,
    myList: Product[]
}

export type ActionType = {
    type: string
    payload?: {
        id?: string;
        name?: string,
        img?: string,
    }
}

export const myListProductsInitialState:myListProductState = 
    {
        count: 0, 
        myList: []
    };


export const myListProductsReducer = (state: myListProductState, action: ActionType) => {
    switch(action.type){ 
        case 'ADD':
            if(action.payload?.name && action.payload?.img) {// só passa daqui se existir um name e img]
                let checkExistProduct = state.myList.filter(item => item.name !== action.payload?.name); // filtra a lista menos o produto
                
                if(checkExistProduct.length === state.myList.length){// se os array forem do msm tamanho, ou seja ainda nao existe aquele produto na lista
                    const newState = {...state}

                    newState.count = state.count+=1;
               
                    newState.myList.push({
                        id: uuidv4(),
                        name: action.payload?.name,
                        img: action.payload?.img
                    })
                    
                    return newState;             
                }
            }          
        break;
        case 'DEL':
            if (action.payload?.id){
                let newState = {...state}
                newState.myList = newState.myList.filter(item => item.id !== action.payload?.id) // DELETA O QUE FOR =
                return newState;
            }           
        break;     
    }
    return state;
}
