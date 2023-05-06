import React from 'react';
import {Button} from 'react-bootstrap';
const Cart = ({setShowCart}) => {
  return (
   <>
   
    <div className='position-fixed  w-25 h-100 top-1 end-0 bg-light border border-secondary z-3 mt-5  '>
      <div className='fs-3 position-absolute top-0 end-0 pe-3 ' onClick={()=> setShowCart(false)}><i class="bi bi-x-square"></i></div>
      <h4 className='pt-4 fs-2 pb-3'>Cart</h4>
      <div className='d-flex justify-content-around fs-5 '>
        <p className='border-bottom border-dark'>ITEM</p>
        <p className='border-bottom border-dark' >PRICE</p>
        <p className='border-bottom border-dark'>QUANTITY</p>

      </div>
      <div className='text-end pe-4 pb-5'><h3>Total : $0</h3></div>
      <Button>Purchase</Button>
    </div>
    </>
  )
}

export default Cart