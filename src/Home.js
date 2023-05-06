import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink} from 'react-router-dom';

import Footer from './Footer';
const Home = () => {
  return (
    <>
    <div>
    <Navbar className='d-flex position-fixed w-100  justify-content-center bg-dark  border-bottom p-2 fs-5'>
    <NavLink to={'/'} className='px-4 text-light text-decoration-none' end > Home </NavLink>
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none' > Store </NavLink>
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none'> About </NavLink>

       

    </Navbar>
    <div className='pt-5 bg-dark'>
    <h1></h1>
    <h1 className='pt-5 pb-5  text-light'>The Generics</h1>
    <p className='fs-5 border text-light border-light w-25 m-auto p-1 '>Get Out Latest Album</p>
    <div className='text-primary mt-3 fs-1 pb-4'><i class="bi bi-play-circle"></i></div>
    </div> 
   
     <h2 className='pt-3 pb-3 '>Tours</h2>

     <table class="table text-start w-50 m-auto">
  
  <tbody>
    <tr>
      
      <td>July 16</td>
      <td>DETROIT,M</td>
      <td>DTE ENERGY MUSIC THEATER</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
    <tr>
      
      <td> July 19</td>
      <td>TORONTO,ON</td>
      <td>BUDWEISER STAGE</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
    <tr>
      
      <td> July 22</td>
      <td>BRISTOW, VA</td>
      <td>IGGY LUBE LIVE</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
    <tr>
      
      <td>July 29</td>
      <td>PHOENIX, AZ</td>
      <td>AK-CHIN PAVILION</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
    <tr>
      
      <td>AUG 2</td>
      <td>LAS VEGAS, NV</td>
      <td>T-MOBILE ARENA</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
    <tr>
      
      <td>AUG 7</td>
      <td>CONCORD, CA</td>
      <td>CONCORD PAVILION</td>
      <td className='text-end'><button className='border-0 bg-primary text-light px-3 py-1'>BUY TICKETS</button></td>
    </tr>
   
  </tbody>
</table>
  </div>

  <Footer />
    </>
  )
}

export default Home