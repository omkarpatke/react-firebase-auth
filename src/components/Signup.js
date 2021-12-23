import React from 'react';
import { Button ,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
    return (
        <div className='signup-container'>
            <Form>
                <h2>Firebase Sign Up</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Sign Up
  </Button>
 
  <Form.Text className="text-muted">
      have an account <Link to='/'>Log In</Link>
    </Form.Text>
 <hr />

 <Button variant="primary" className='signInWithGoogle'>
   Sign in with Google
  </Button>
</Form>
        </div>
    )
}
