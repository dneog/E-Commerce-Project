import React from 'react'
import {Button} from 'react-bootstrap';
const CartItem = ({product}) => {
    const {imageUrl, price, title, album, quantity}= product;
  return (
    <div className='d-flex align-items-center p-2'>
        <img className='w-25 rounded' src={imageUrl} alt="" />
        <p className='p-1'>{album}</p>
        <p className='ps-4 pe-2 '>${price}</p>
        <span>
        <input type="number" placeholder='1'  className='w-50 mb-3' />
        </span>
       
        <button class="btn btn-danger mb-3 ">Remove</button>
    </div>
  )
}

export default CartItem