import React, { createContext, useContext, useReducer } from 'react'
import { CartReducer } from './CartReducer';

const initialValue = {
    CartList : [],
   
}


const CartContext = createContext();

export const CartProvider= ({children})=> {
    const [state, dispatch]= useReducer(CartReducer, initialValue);

    const addToCart= (product) => {
       
        dispatch({
            type:'ADD_TO_CART',
            payload: product
                
            
        })
    }

    
   

    const removeItem = (Itemid)=> {
       
       

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload :
               Itemid
            
        })
      
    }

    const updateTotal=(Itemid, quantity)=> {
       

        dispatch({
            type: 'UPDATE_TOTAL',
            payload: {
                Itemid, quantity
            }
        })
    }

  
    return (
        <CartContext.Provider value={{CartList : state.CartList, addToCart, removeItem, updateTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart= ()=> {
    return useContext(CartContext)
}