import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {getAuth, signOut} from 'firebase/auth';
import app from '../../firebase.init';
import {Button} from 'react-bootstrap';


const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        
        <nav className="container">
         <Link to='/'>Home</Link>   
        <Link to='/blogs'>Blogs</Link>  
        <Link to="/checkout">Checkout</Link>  
        <span>{user?.displayName && user?.displayName}</span>
        <span>{user?.email && user?.email}</span>
        {
            user?.uid
            ?
            <Button onClick={()=>signOut(auth)}>Sign Out</Button>
            :
            <Link className="login" to='login'>Log In</Link>
        }   
        <Link className="register" to='/register'>Register</Link> 
        
        </nav> 
    );
};

export default Header;