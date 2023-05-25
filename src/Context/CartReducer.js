export const CartReducer= (state, action)=> {
    const {type, payload}= action;

    switch(type){
        case 'ADD_TO_CART':
            const existingItemIndex = state.CartList.findIndex((current)=> current.id === payload.id)
            const existingCartItem = state.CartList[existingItemIndex];
            let updatedCartItems;
            if(existingCartItem){
          
            updatedCartItems= [...state.CartList]
            updatedCartItems[existingItemIndex].quantity += 1;

            return {...state,
                CartList : updatedCartItems
            }   
        }else{
            const addNewItem= {
                ...payload,
                quantity: 1,
            }
            return {
                ...state,
                CartList: [...state.CartList, addNewItem]
            }
        }   

        case 'CART_ITEM':
            
            return {
               ...state,
                CartList: payload,
               
            }
        case 'UPDATE_TOTAL':
            const updatedQuantity = state.CartList.map((item)=> {
                if(item.id === payload.Itemid){
                    return{
                        ...item,
                        quantity: payload.quantity
                    }
                }
                return item
            })

            return{
                ...state,
                CartList: updatedQuantity
            }



        case 'REMOVE_FROM_CART':

            return {...state, 
                CartList: state.CartList.filter(
                    (Item)=> Item.id !== payload
                ) }
       
        default :
           return state
    }
}