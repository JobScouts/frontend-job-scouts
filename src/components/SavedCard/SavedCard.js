import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import company from '../Assest/company.jpg';
import './SavedCard.css';
import Details from "../Details/Details";
import { useState } from "react";

const SavedCard = () => {
  const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
      setShowModal(true);
    };
  return (
    <div className="center">
      <Card className="card">
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
            <Button variant="secondary" onClick={handleShowModal}>More Details</Button>
            <Button variant="primary">Apply To Job</Button>
          </div>
        </Card.Body>
      </Card>
      {showModal && (<Details/>)}

    </div>
  );
};

export default SavedCard;
