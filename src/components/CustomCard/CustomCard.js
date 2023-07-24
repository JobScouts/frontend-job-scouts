import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CustomCard.css";
import Details from "../Details/Details";
import Company from '../Assest/company.jpg'

const CustomCard = (props) => {
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
                <Button variant="primary" className="btn">
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
