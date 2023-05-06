import React from 'react'
import {Button} from 'react-bootstrap'
const ProductPage = ({product}) => {
    const {album, imageUrl, price} = product
  return (
   
        <div>
        <p className='fs-4'>{album}</p>
        <img src={imageUrl} alt="" />
      
        <div className='d-flex pt-4 pb-5 justify-content-between'>
        <p>${price}</p>
        <Button variant="primary" size="sm">Add to Cart</Button>
        </div>
       
        </div>
    
  )
}

export default ProductPage