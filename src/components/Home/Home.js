import React from 'react';
import './Home.css'
import { Button } from 'react-bootstrap';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Destionation from '../Destination/Destionation';


const Home = () => {
    return (
        <div className="">
            <div className="banner mt-5 mb-5 container">
                <div className="mt-5">
                    <h1 className="fs-7"><span className="fs-10 fw-bold text-primary">Travel Agent</span> <br></br> Help you to find destination</h1>
                    <p>If you are a travel peples who love yo travel all over the world then i am here for to to guide all over things about travel start with flight or by route service hotel/ motel destination place food guide you to where you should travel based on season.</p>
                    <Button variant="success" className="p-2">Book Now</Button>
                </div>
                <div>
                    <img className="rounded" src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs="></img>
                </div>
            </div>
            <Destionation></Destionation>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;