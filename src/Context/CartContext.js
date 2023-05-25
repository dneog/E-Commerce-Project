import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { CartReducer } from './CartReducer';
import axios from 'axios';
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

    // const [UserData, setData]= useState([])
    const showCartItems= async ()=> {
        try{
            const response= await fetch('https://crudcrud.com/api/f9c960933f5f456e833e46996ac98722/testgmailcom');
           const data= await response.json()
                dispatch({
                    type: 'CART_ITEM',
                    payload:data
                })
               
                
        } catch(err) {
            console.log(err);
        }
    }
    
   
      
    

    useEffect(()=> {

        showCartItems()

    }, []);

  
    const addToCart= async (product) => {
        // const newItems= {...product}
        dispatch({
            type:'ADD_TO_CART',
            payload: product
                
            
        })
     
        try{
            
          const response= await axios.post('https://crudcrud.com/api/f9c960933f5f456e833e46996ac98722/testgmailcom', product );
            // newItems.id= response.data.id
          
            console.log(product);
           
           
            
         } catch(err) {
             console.log(err);
         }
      
    }

    
   

    const removeItem = async (Itemid)=> {
       
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload :
               Itemid
            
        })

        await axios.delete(`https://crudcrud.com/api/f9c960933f5f456e833e46996ac98722/testgmailcom/${Itemid}`);
       
       
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