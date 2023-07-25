import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";
import Details from "../Details/Details";
import { useAuth0 } from '@auth0/auth0-react';
import Company from '../Assest/company.jpg'

const CustomCard = (props) => {
  let data = props.data;
  const { user, isAuthenticated } = useAuth0();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  async function handleSaveJob(obj) {
    if (isAuthenticated) {
      let url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
      const jobData = {
        job_title: obj.job_title,
        employer_name: obj.employer_name,
        employer_logo: obj.employer_logo,
        employer_website: obj.employer_website,
        job_highlights: obj.job_highlights,
        job_apply_link: obj.job_apply_link,
        sub: user.sub
      };
      try {
            let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData),
            });

            if (response.status === 201) {
            alert('Added successfully');
            } else {
                console.log('Error : ', response.statusText);
                alert('Failed to add Job');
              }

      }catch (error) {
        console.log('Error:', error.message);
        alert('Failed to add Job');
      }
    }

    else {
      alert("You have to Login to Add jobs in your profile");
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
                  onClick={() => handleSaveJob(obj)} // Pass the job object to handleSaveJob
                >
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