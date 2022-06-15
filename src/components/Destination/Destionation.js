import React from 'react';
import './Destination.css';

const Destionation = () => {
    return (
        <div className='container'>
            <h1 className="text-center fs-25 mt-5">Favourite Places</h1>
            <div className="destiny">
                <div className='destination'>
                <img className="rounded" src="https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
                <div class="text">Barcelona</div>
            </div>
            <div className='destination'>
                <img className="rounded" src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <div class="text">Ireland</div>
            </div>
            <div className='destination'>
                <img className="rounded" src="https://images.unsplash.com/photo-1594750898059-89f9b4cf9519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" srcset="" />g
                <div className="text">London</div>
            </div>
            </div>
        </div>
    );
};

export default Destionation;