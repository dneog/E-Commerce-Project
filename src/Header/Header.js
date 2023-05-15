import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Cart from '../Cart/Cart';
import { NavLink} from 'react-router-dom';
import { UseCart } from '../Context/CartContext';


const Header = () => {
  const {CartList}= UseCart()
  // const countItems= CartList.reduce((current, Item)=> {current+ Item.quantity}, 0)
  const [showCart, setShowCart]= useState(false)
  return (
<>
    <Navbar className='d-flex position-fixed w-100 position-relative justify-content-center bg-dark  border-bottom p-2 fs-5'>
    <NavLink to={'/'} className='px-4 text-light text-decoration-none' end > Home </NavLink>
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none'> Store </NavLink>
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none' > About </NavLink>

        <Button onClick={()=> setShowCart(true)} className='fs-4  position-absolute text-light top-0 end-0 ' variant="Light">
         Cart  
      <Badge className='mx-2 fs-5 '  bg="secondary">{CartList.length}</Badge>
    </Button>

    </Navbar>
  
   {/* <Navbar className='d-flex position-fixed w-100 justify-content-between bg-dark  border-bottom p-1 pt-2' >
   <Nav className='px-5 ms-4'></Nav>
   
    <Nav className='fs-4'>
        <NavLink to={'/'} className='px-4 text-light text-decoration-none' end> Home </NavLink>
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none'> Store </NavLink>
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none'> About </NavLink>
       
     
       
      </Nav>  

      
    </Navbar> */}
    { showCart && <Cart setShowCart= {setShowCart} />}
    <div className='pt-5'>
   
    <h1 className='pt-4 pb-4 fs-1 text-light bg-dark overflow-hidden'>The Generics</h1></div>
    </>
  )
}

export default Header