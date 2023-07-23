import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import company from '../Assest/company.jpg';
import './SavedCard.css';

const SavedCard = () => {
  return (
    <div className="center">
      <Card border="success" className="card">
        <Card.Body>
          <div className="card-content">
            <img src={company} alt="Card Image" className="card-image" />
            <div className="card-text">
              <Card.Title>Job Title</Card.Title>
              <Card.Text>
                <p>City, Country</p>
                <p>Min Salary - Max Salary</p>
              </Card.Text>
            </div>
          </div>
          <div className="card-buttons">
            <Button variant="secondary">More Details</Button>
            <Button variant="primary">Apply To Job</Button>
          </div>
        </Card.Body>
      </Card>
      <Card border="success" className="card">
        <Card.Body>
          <div className="card-content">
            <img src={company} alt="Card Image" className="card-image" />
            <div className="card-text">
              <Card.Title>Job Title</Card.Title>
              <Card.Text>
                <p>City, Country</p>
                <p>Min Salary - Max Salary</p>
              </Card.Text>
            </div>
          </div>
          <div className="card-buttons">
            <Button variant="secondary">More Details</Button>
            <Button variant="primary">Apply To Job</Button>
          </div>
        </Card.Body>
      </Card>
      <Card border="success" className="card">
        <Card.Body>
          <div className="card-content">
            <img src={company} alt="Card Image" className="card-image" />
            <div className="card-text">
              <Card.Title>Job Title</Card.Title>
              <Card.Text>
                <p>City, Country</p>
                <p>Min Salary - Max Salary</p>
              </Card.Text>
            </div>
          </div>
          <div className="card-buttons">
            <Button variant="secondary">More Details</Button>
            <Button variant="primary">Apply To Job</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SavedCard;
