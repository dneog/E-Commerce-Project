import React from 'react'
import ProductPage from './ProductPage'
import {Button} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header/Header';
import img2 from './pic/Instruments-ge438f9825_1280.png'
import img3 from './pic/old-gb6fd8a2e2_640.png';
import img4 from './pic/woofer-gf8189fb69_1280.png'
import {datas} from './Data'

const Store = () => {


//  const productsArr = [

// {

// title: 'Colors',
// album: 'Album 1',
// price: 100,
// id: 1,
// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
// quantity: 1 
           

// },

// {

// title: 'Black and white Colors',
// album: 'Album 2',
// price: 50,
// id: 2,
// imageUrl: 
//   'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//   quantity: 1 
         


// },

// {

// title: 'Yellow and Black Colors',
// album: 'Album 3',
// price: 70,
// id: 3,
// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
// quantity: 1           


// },

// {

// title: 'Blue Color',
// album: 'Album 4',
// price: 100,
// id: 4,
// imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
// quantity: 1          


// }

//     ]


  return (
    <>
    <Header />
    <div className='pt-5'>
   
   <h1 className='pt-4 pb-4 fs-1 text-light bg-dark overflow-hidden'>The Generics</h1></div>
    <h2 className='p-3'>Music</h2>
  <div className='w-50 m-auto justify-content-center'>
  <section className=' d-flex  z-index-n1 justify-content-between  flex-wrap  '>
    
    {datas.map((product)=> (
        <ProductPage key={product.id}  product={product} />
    ))}
  </section>

   <Button variant="secondary" className='mt-2'>See The Cart</Button>
 
  </div>
  <Footer />
  </>
  )
}

export default Store