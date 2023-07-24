import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import company from "../Assest/company.jpg";
import "./CustomCard.css";
import { useState } from "react";
import Details from "../Details/Details";
import { useAuth0 } from '@auth0/auth0-react';
// import { Alert } from "react-bootstrap";

const CustomCard = () => {
  const { user, isAuthenticated} = useAuth0();
  // const [show, setShow] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

   async function handleSaveJob() {
      let url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
    // Replace the following data with the actual job data you want to save
    const jobData = {
      job_title: "mohamad",
      employer_name: "samara",
      employer_logo: "logo",
      employer_website: "web",
      job_highlights: "Hello5",
      job_apply_link: "Hello6",
      sub: user.sub
    };
        // Make an HTTP POST request using fetch
        try {
          let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData),
          });
      
          if (response.status === 201) {
            alert('Added successfully');
          } else {
            console.log('Error:', response.statusText);
            alert('Failed to add movie');
          }
        } catch (error) {
          console.log('Error:', error.message);
          alert('Failed to add movie');
        }
      }  

  return (
    <div className="main">
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
                {/* <h2>{user.sub}</h2> */}
              </span>
            </div>
          </Card.Text>
          <div className="button-container">
            <Button variant="primary" className="custom-button btn" onClick={handleShowModal}>More Details</Button>
            <Button variant="primary" className="btn"  onClick={handleSaveJob}>Save</Button>
          </div>
        </Card.Body>
      </Card>
      {showModal && <Details handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CustomCard;
