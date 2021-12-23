import React from 'react';
import { Button ,Form} from 'react-bootstrap';
import './login.css';
import {Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='login-container'>
            <Form>
              <h2>Firebase Auth Login</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit" className='loginBtn'>
   Login
  </Button>

  <div className="text-muted">
      Don't have an account <Link to='/signup'> Sign Up</Link>
    </div>

<hr />
    <Button variant="primary" className='signInWithGoogle'>
   Sign in with Google
  </Button>
</Form>
        </div>
    )
}
