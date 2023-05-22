import React, { createContext, useContext, useReducer, useState } from 'react'
import { CartReducer } from './CartReducer';

const initialValue = {
    CartList : [],
   
}


const CartContext = createContext({
    token: '',
    isLoggedin: false,
    login: (token)=> {},
    logout: ()=> {}
});

export const CartProvider= ({children})=> {

// Firebase Code
const initialToken= localStorage.getItem('token')
const [token, setToken]=useState(initialToken);
const userIsLoggedIn= !!token;

const loginHandler=(token)=> {

    setToken(token);
    localStorage.setItem('token', token);
    setTimeout(()=> {
        localStorage.removeItem('token')
    }, 300000)
}
const logoutHandler=()=> {
    setToken(null);
    localStorage.removeItem('token');
}
const contextValue= {
    token: token,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
}



// use Reducer and Context Code

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
        <CartContext.Provider value={{CartList : state.CartList, addToCart, removeItem, updateTotal, contextValue}}>
            {children}
        </CartContext.Provider>
    )
}

export const UseCart= ()=> {
    return useContext(CartContext)
}
export {CartContext}