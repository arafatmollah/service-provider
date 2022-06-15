import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./Services.css";

const Services = () => {
    return (
        <div>
            <h2 className="mt-5 fs-7 fw-bold text-center">My Services</h2>
            <div className="card mt-5 border-0 container">
            <Card style={{ width: '18rem'}}>
  <Card.Body>
    <Card.Title>Basic</Card.Title>
    <Card.Title>$40</Card.Title>
    <Card.Text>
      We are Offering you!
      Best Route to Travel
      Which hotel to book
        Foods
      
    </Card.Text>
    <Button variant="danger"><Link to='/checkout'>Booking</Link></Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Favourite</Card.Title>
    <Card.Title>$60</Card.Title>
    <Card.Text>
     We are offering you!
     Best Route to Travel
        Which hotel to book
        Food
        Places

    </Card.Text>
    <Button variant="danger"><Link to='/checkout'>Booking</Link></Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Premium</Card.Title>
    <Card.Title>$100</Card.Title>
    <Card.Text>
    We are offering you!
      Best Route to Travel
      Which hotel to book
      Food
      Best place
        Sports Activity
      
    </Card.Text>
    <Button variant="danger"><Link to='/checkout'>Booking</Link></Button>
  </Card.Body>
</Card>
            </div>
        </div>
    );
};

export default Services;