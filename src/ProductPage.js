import React from 'react'
import {Button} from 'react-bootstrap';
import { UseCart } from './Context/CartContext';
const ProductPage = ({product}) => {
  const { addToCart } = UseCart();
   
   
  return (
   
        <div key={product.id}>
        <p className='fs-4'>{product.album}</p>
        <img src={product.imageUrl} alt="" />
      
        <div className='d-flex pt-4 pb-5 justify-content-between'>
        <p>${product.price}</p>
        <Button variant="primary" size="sm" onClick={()=> addToCart(product)}>Add to Cart</Button>
        </div>
       
        </div>
    
  )
}

export default ProductPage