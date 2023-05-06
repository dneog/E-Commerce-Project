import React from 'react'
import ProductPage from './ProductPage'
import {Button} from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header/Header'
const Store = () => {
    const productsArr = [

{

title: 'Colors',
album: 'Album 1',
price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',
album: 'Album 2',
price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',
album: 'Album 3',
price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',
album: 'Album 4',
price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]
  return (
    <>
    <Header />
    <h2 className='p-3'>Music</h2>
  <div className='w-50 m-auto justify-content-center'>
  <section className=' d-flex  z-index-n1 justify-content-between  flex-wrap  '>
    
    {productsArr.map((product)=> (
        <ProductPage  product={product} />
    ))}
  </section>
      <Button variant="secondary" className='mt-2'>See The Cart</Button>
  </div>
  <Footer />
  </>
  )
}

export default Store