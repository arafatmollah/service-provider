import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
    
        <nav className="container">
         <Link to='/'>Home</Link>   
        <Link to='/blogs'>Blogs</Link>  
        <Link to="/checkout">Checkout</Link>  
        <Link className="login" to='login'>Log In</Link>   
        <Link className="register" to='/register'>Register</Link> 
        
        </nav> 
    );
};

export default Header;