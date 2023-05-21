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

  const [showCart, setShowCart]= useState(false)
  return (
<>
    <Navbar style={{zIndex: 1}} className='d-flex position-fixed w-100  justify-content-center bg-dark border-bottom p-2 fs-5'>
    <NavLink to={'/'} className='px-4 text-light text-decoration-none' end > Home </NavLink>
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none'> Store </NavLink>
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none' > About </NavLink>
        <NavLink to={'/contact'} className='px-4 text-light text-decoration-none' > Contact us </NavLink>

        <Button onClick={()=> setShowCart(true)} className='fs-4  position-absolute text-light top-0 end-0 ' variant="Light">
         Cart  
      <Badge className='mx-2 fs-5 '  bg="secondary">{CartList.length}</Badge>
    </Button>

    </Navbar>
  

    { showCart && <Cart setShowCart= {setShowCart} />}
   
    </>
  )
}

export default Header