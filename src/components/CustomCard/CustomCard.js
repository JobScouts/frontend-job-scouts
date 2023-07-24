import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";
import Details from "../Details/Details";
import { useAuth0 } from '@auth0/auth0-react';
// import { Alert } from "react-bootstrap";
import Company from '../Assest/company.jpg'

const CustomCard = (props) => {
const { user, isAuthenticated} = useAuth0();
// const [show, setShow] = useState(true);
let data =props.data;

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleShowModal = (job) => {
    console.log("joab var"+job);
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
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
      {data.map((obj, i) => (
        <div key={i}>
          <Card style={{ width: "20rem" }} className="card">
            <Card.Img
              variant="top"
              src={obj.employer_logo === "" ? Company : obj.employer_logo}
              alt="employer_logo"
              className="logo"
            />
            <Card.Body>
              <Card.Title className="title">{obj.employer_name}</Card.Title>
              <Card.Text>
                <div className="location">
                  <p>{obj.job_city}</p> <p>,</p> <p>{obj.job_country}</p>
                </div>
                <div className="job">
                  <p>{obj.job_title}</p>
                </div>
              </Card.Text>
              <div className="button-container">
                <Button
                  variant="primary"
                  className="custom-button btn"
                  onClick={() => handleShowModal(obj)}
                >
                  More Details
                </Button>
                <Button 
                variant="primary" 
                className="btn"
                onClick={handleSaveJob}>
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
      {showModal && (
       <Details job={selectedJob} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default CustomCard;
