import React from 'react';
import {Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { UseCart } from '../Context/CartContext';

const Cart = ({setShowCart}) => {

  const { CartList, removeItem, updateTotal} = UseCart();
  function handleQuantity(Itemid, event){
    const quantity = Number(event.target.value);
    updateTotal(Itemid, quantity)
  }
 
  // const totalPrice = CartList.reduce((current, item)=> {
  //   return current + item.price * item.quantity
  // },0);
  function totalItemPrice(){
    let totalPrice=0;
    CartList.forEach(item => {
      totalPrice += item.price * item.quantity
    });
    return totalPrice
  }
  

 function message(){
  alert('Order Confirmed')
  
 }

  return (
   <>
   
    <div style={{'width': '430px'}}  className='position-fixed   h-100 top-1 end-0 bg-light border border-secondary z-3 mt-5'>
      <div className='fs-3 position-absolute top-0 end-0 pe-3 ' onClick={()=> setShowCart(false)}><i class="bi bi-x-square"></i></div>
      <h4 className='pt-4 fs-2 pb-3'>Cart</h4>
      <div className='d-flex justify-content-around fs-5 '>
        <p className='border-bottom border-dark ps-2 pe-5'>ITEM</p>
        <p className='border-bottom border-dark ' >PRICE</p>
        <p className='border-bottom border-dark'>QUANTITY</p>

      </div>
      {CartList.map((Item)=> (
       
        <div key={Item.id} className='d-flex align-items-center p-2'>
      
        <img className='w-25 rounded' src={Item.imageUrl[0]} alt="" />
        <p className='p-2'>{Item.album}</p>
        <p className='ps-4 pe-4 '>${Item.price}</p>
        <span>
        <input type="number"  min={1} value={Item.quantity} onChange={(event)=> handleQuantity(Item.id, event)} className='w-50 mb-3' />
        </span>
       
        <button onClick={()=> removeItem(Item.id)} class="btn btn-danger mb-3 ">Remove</button>
        
    </div>
    ))}
      <div className='text-end pe-4 pb-5'><h3>Total : ${totalItemPrice()}</h3></div>
      <Button onClick={message}>Purchase</Button>
    </div>
    </>
  )
}

export default Cart