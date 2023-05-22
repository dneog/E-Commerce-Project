import React, { useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { UseCart } from './Context/CartContext';

const ContactUS = () => {
  const {isLoggedin}= UseCart();
  const name= useRef(null);
  const email= useRef(null);
  const contact= useRef(null);
  const[data, userData]= useState([]);

  async function handleSubmit(e){
    e.preventDefault();
    const data= {
      name: name.current.value,
      email: email.current.value,
      contact: contact.current.value
    }
    const response= await fetch('https://simple-crud-4c559-default-rtdb.firebaseio.com/data.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      } 
     });
    
  }
  return (
    <div>
       <Navbar className='d-flex position-fixed w-100  justify-content-center bg-dark  border-bottom p-2 fs-5'>
    <NavLink to={'/'} className='px-4 text-light text-decoration-none' end > Home </NavLink>
    {isLoggedin && (
        <NavLink to={'/store'} className='px-4 text-light text-decoration-none' > Store </NavLink>
        )}
    {!isLoggedin && (
        <NavLink to={'/login'} className='px-4 text-light text-decoration-none' > Store </NavLink>
        )}
        <NavLink to={'/about'} className='px-4 text-light text-decoration-none'> About </NavLink>
        <NavLink to={'/login'} className='px-4 text-light text-decoration-none' > Login </NavLink>
        <NavLink to={'/contact'} className='px-4 text-light text-decoration-none'> Contact us </NavLink>      
    </Navbar>
    <p className='pt-5'></p>
    
    

    <Card className='w-50 m-auto'>
      <Card.Header as="h5">Contact Us</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={name} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" ref={contact} />
        
      </Form.Group>

     
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
       
       
      </Card.Body>
    </Card>
  




    </div>
  )
}

export default ContactUS