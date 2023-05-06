import React from 'react';
import {Button} from 'react-bootstrap';
import CartItem from './CartItem';
const Cart = ({setShowCart}) => {
 const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    album : 'Album 1',
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    album :' Album 3',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    album : 'Album 4',
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
  return (
   <>
   
    <div className='position-fixed  w-25  h-100 top-1 end-0 bg-light border border-secondary z-3 mt-5  '>
      <div className='fs-3 position-absolute top-0 end-0 pe-3 ' onClick={()=> setShowCart(false)}><i class="bi bi-x-square"></i></div>
      <h4 className='pt-4 fs-2 pb-3'>Cart</h4>
      <div className='d-flex justify-content-around fs-5 '>
        <p className='border-bottom border-dark ps-2 pe-5'>ITEM</p>
        <p className='border-bottom border-dark ' >PRICE</p>
        <p className='border-bottom border-dark'>QUANTITY</p>

      </div>
      {cartElements.map((product)=> (
        <CartItem  product={product} />
    ))}
      <div className='text-end pe-4 pb-5'><h3>Total : $0</h3></div>
      <Button>Purchase</Button>
    </div>
    </>
  )
}

export default Cart