import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Company from "../Assest/company.jpg";
import "./Details.css";

const Details = ({ job, handleCloseModal }) => {
  let lin = job.job_apply_link;
  const [showQualifications, setShowQualifications] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleQualifications = () => {
    setShowQualifications(!showQualifications);
  };

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div>
      <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:'center'}}>{job.employer_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
              src={job.employer_logo === "" ? Company : job.employer_logo}
              alt={job.employer_name}
              className="company-logo"
              style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }}/>
          <p>
            <b>Our WebSite:</b>{" "}
            {job.employer_website === ""
              ? "Our Website Not Ready !"
              : job.employer_website}
          </p>
          <p>
            <b>Location:</b> {job.job_city}, {job.job_country}
          </p>
          <p>
            <b>Job Title:</b> {job.job_title}
          </p>
          <p>
            <b>Job Qualifications:</b>{" "}
            {showQualifications
              ? job.job_highlights
              : job.job_highlights === ""
              ? "No Qualifications Needed !"
              : job.job_highlights.substring(0, 150) + " ..."}
          </p>
          {job.job_highlights && (
            <Button className="see-more-button" onClick={handleQualifications}>
              {showQualifications ? "Read Less" : "Read More"}
            </Button>
          )}
          <p>
            <b>Job description:</b>{" "}
            {showDescription
              ? job.job_description
              : job.job_description === ""
              ? "Description Not Available !"
              : job.job_description.substring(0, 350) + " ..."}
          </p>
          {job.job_description && (
            <Button className="see-more-button" onClick={handleDescription}>
              {showDescription ? "Read Less" : "Read More"}
            </Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>

          <Link to={lin} target="_blank">
            <Button variant="primary" onClick={handleCloseModal}>
              Apply To Job
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Details;
