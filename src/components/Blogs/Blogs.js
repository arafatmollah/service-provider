import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className="text-center mt-5 mb-5">Blogs</h1>
            <div>
                <h3>Difference between authorization and authentication</h3>
                <p><span className='text-primary fw-bold'>Authentication:</span> Authentication is the process where system
                    can define user information and verifying it. Example: email,
                    password, name etc. Like you want to logIn o register a account on
                    facebook then authentication system verify your email, phone no. and 
                    password.
                </p>
                <p><span className='text-primary fw-bold'>Authorization:</span> Authorizaton is 
                the process where system verifying what are the user want to access. Like
                user want login to facebook here authentication verifying the user and authorization
                are access the user where user want to access.
                </p>
            </div>
            <div>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><span className="text-primary fw-bold">Why use firebase: </span>Firebase is a authentication sustem that 
                provide by Google. I am using firebase because it is easy to use beacause of it is provide by Google
                it is must be safe than other authentication system. And moreover it is the most popular and most of
                the company are using this that's why I am using firebase.
                </p>
                <p><span className="text-primary fw-bold">What other options do you have to implement authentication:
                </span> There are some authentication system that have to implement authentication without firebase
                <li>Auth0</li>
                <li>MongoDB</li>
                <li>Passport</li>
                <li>Octa</li>
                <li>JSON web token</li>
                <li>Amazon Cognito</li>
                <li>Keycloak</li>
                </p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication</h3>
                <p><span className='text-primary fw-bold'>Others benefits of firebase: </span>
                <li>Hosting- We can build app and can hosting on firebase</li>
                <li>Boost user engagement with enabled google analytics system</li>
                <li>Optimized App Performance.</li>
                <li>Higher Accessibility to Machine Learning APIs.</li>
                <li>Testing and messaging campaigns</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;