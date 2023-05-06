import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink} from 'react-router-dom';
import img from './Pics/Band Members.png'
import Footer from './Footer';

const About = () => {
  return (
  <div>
    <Navbar className='d-flex position-fixed w-100  justify-content-center bg-dark  border-bottom p-2 fs-5'>
    <NavLink to={'/'} className='px-4 text-light text-decoration-none' end > Home </NavLink>
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none'> Store </NavLink>
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none'> About </NavLink>

       

    </Navbar>
    <div className='pt-5'></div>
    <div className='pt-5 bg-secondary text-light pb-5'>
      <h1>The Generics</h1>
    </div>
    <h2 className='pt-3'>About</h2>



    <div className='col-lg-12 pt-3 w-75 m-auto'>

    
    <img className='w-25 rounded-circle pb-4 float-start mx-5 ' src={img} alt="" />
   
   
    <p className='text-start mx-5 px-5  pt-4 pb-2'>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
</div>
<div className='pb-3'></div>
<Footer />
  </div>
  )
}

export default About