import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {getAuth} from 'firebase/auth';
import app from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const auth = getAuth(app);

const LogIn = () => {

  const notify = () => toast("password reseted");

  let [signInWithGoogle] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user?.email}</p>
      </div>
    );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submission prevented");
  };
    return (
        <div className="container mt-4 shadow p-3 mb-5 bg-body rounded">
            <h1 className='text-center text-danger mt-2'>Please LogIn Here</h1>
            <div>
            <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={email}
        onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password}
        onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" required />
  </Form.Group>
  <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="success" type="submit">
    Submit
  </Button>
  <Button className="m-3" onClick={() => signInWithGoogle()}>Sign In with Google</Button>
  <a onClick={notify} href="#">Password Reset</a>
  <ToastContainer />
</Form>
            </div>
        </div>
    );
};

export default LogIn;