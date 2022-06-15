import React from 'react';
import {Card, Button} from 'react-bootstrap';
import "./Services.css";

const Services = () => {
    return (
        <div>
            <h2 className="mt-5 fs-7 fw-bold text-center">My Services</h2>
            <div className="card mt-5 border-0 container">
            <Card className="">
  <Card.Body>
    <Card.Title as="h2">Basic</Card.Title>
    <h3>$20</h3>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
            <Card>
  
  <Card.Body>
    <Card.Title as="h2">Special</Card.Title>
    <h3>$30</h3>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Card.Text>
      With supporting text below.
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
            <Card>
 
  <Card.Body>
    <Card.Title as="h2">Premium</Card.Title>
    <h3>$40</h3>
    <Card.Text>
      With supporting text below
    </Card.Text>
    <Card.Text>
      With supporting text below
    </Card.Text>
    <Card.Text>
      With supporting text below
    </Card.Text>
    <Card.Text>
      With supporting text below
    </Card.Text>
    <Card.Text>
      With supporting text below
    </Card.Text>
    <Button variant="primary">Book Now</Button>
  </Card.Body>
</Card>
            </div>
        </div>
    );
};

export default Services;