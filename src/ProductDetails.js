import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { datas } from './Data';

import { UseCart } from './Context/CartContext';
import Header from './Header/Header';
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
    const { addToCart } = UseCart();
    const [album, setAlbum]= useState('');
    const [price, setPrice]= useState('');
   
    const [imageIndex, setImageIndex]= useState(0)
   const handleClick=(index)=> {
    setImageIndex(index)
   }
    const {id}= useParams();
    const ProductDetail = datas.find((data)=> data.id=== parseInt(id))

    useEffect(()=> {
       
        setAlbum(ProductDetail.album)
        setPrice(ProductDetail.price)
       
        
    })
       
    

  return (
    <>
    <div >
    <Header />
    </div>
   
    <p className='pt-4'></p>
    <div style={{width: '700px'}} className='d-flex pt-5 z-index-0 m-auto '>
    <div className='w-75 me-4'>
    <div>
    <ReactImageMagnify   {...{
    smallImage: {
      
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
       
        src: ProductDetail.imageUrl[imageIndex]
    },
    largeImage: {
        src: ProductDetail.imageUrl[imageIndex],
        
        width: 1400,
        height: 1800
    }
}} />
    {/* <img className='me-5' src={image} alt="" /> */}
    
    </div>
    <div className='pt-3'>
      {ProductDetail.imageUrl.map((img, index)=> (
        <img className='w-25 p-1' src={img} alt="" onClick={()=> handleClick(index)} /> 
      ))}
    </div>
</div>
      <div className='w-50'>
        <p className='fs-3 pt-5 text-start'>{album}</p>
        <p className='fs-3 text-start'>Price : <span className='fw-bold'>{price}$</span></p>
        <p className='fs-4 text-start'>Ratings : <i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star-fill text-warning"></i><i class="bi bi-star"></i></p>
        <Button className='d-flex' variant="primary" size="md" onClick={()=> addToCart(ProductDetail)}>Add to Cart</Button>
      </div>
    </div>
    <div style={{zIndex: -1}}  class="card w-50 mt-4 m-auto">
  <h5 class="card-header">Reviews</h5>
  <div class="card-body">
    <p class="card-title fw-normal fs-5 text-start"><i class="bi bi-person-circle pe-1"></i>User1234 </p>
    <p class="card-text text-start">Beautiful Songs.Good experience.</p>

    <p class="card-title fw-normal fs-5 text-start"><i class="bi bi-person-circle pe-1"></i>User4765</p>
    <p class="card-text text-start">Nice experience, keep it up.</p>

    <p class="card-title fw-normal fs-5 text-start"><i class="bi bi-person-circle pe-1"></i>User4435</p>
    <p class="card-text text-start">Nice album. Liked It.</p>
   
  </div>
</div>
    </>
  )
}

export default ProductDetails