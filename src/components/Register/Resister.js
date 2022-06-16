import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Resister = () => {
  let [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [
    createUserWithEmailAndPassword,
    users,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
if(error){
  return(
    <div>Error: {error.message}</div>
  )
}
  
    return (
        <div className="container shadow mt-4 p-3 mb-5 bg-body rounded">
            <h2 className='text-center text-primary mt-2'>Registration Your Details</h2>

            <div className="">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Enter your full Name</Form.Label>
  <Form.Control type="name" placeholder="Enter name" />
    <Form.Label>Email address</Form.Label>

    <Form.Control type="email" value={email}
    onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password}
    onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={() => createUserWithEmailAndPassword(email, password)} variant="primary" type="submit">
    Submit
  </Button>
  <Button onClick={() => signInWithGoogle()}>SignUP with Google</Button>
</Form>
            </div>
        </div>
    );
};

export default Resister;