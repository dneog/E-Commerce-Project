import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Routes, Route} from 'react-router-dom';

const Login = () => {
  
  const navigate= useNavigate();
  // const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading]= useState(false);
  const email= useRef(null);
  const password= useRef(null);


 function handleSubmit(e){
    e.preventDefault();
   
     const enteredEmail= email.current.value;
    const  enteredPassword= password.current.value;
   
    setLoading(true)
    let url;
   
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcs8nLn2SZVKhB4JcRURQvIPdouSEVqgE'
   
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(res=> {
        setLoading(false)
        if(res.ok){
            return res.json()
        }else{
         return res.json().then(data=> {
           
            let errorMessage= 'Authentication Failed';
            
           
            throw new Error(errorMessage)

          })
        }
      })
          
          .then(data=> {
          //  login(data.idToken);
            navigate('/Store')
          }).catch(err=> {
            alert(err.message)
          })
  }
  return (
    <div>
        <Card style={{'width': '400px'}} className='mt-5 m-auto'>
      <Card.Header as="h5">Login</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" ref={email} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" ref={password} />
        
      </Form.Group>
         
      {!loading &&  <Button variant="primary" type="submit">
        Login
      </Button> }
        {loading && <p>Loading...</p>}
     
    </Form>
       
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Login