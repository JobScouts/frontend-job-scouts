import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Company from "../Assest/company.jpg";
import "./Details.css";

const Details = ({ job, handleCloseModal }) => {
  const [show, setShow] = useState(false);
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) : text;
  };
  const maxLength = 170;
  const truncatedJobDescription = truncateText(job.job_description, maxLength);

  const handleApplyToJob = (applyLink) => {
    window.open(applyLink, "_blank");
  };

  return (
    <div>
        <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title className="ModalTitle">{job.employer_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="ModalBody">
          <div className="leftModal">
            <img src={job.employer_logo === "" ? Company : job.employer_logo} alt={job.employer_name} className="ModalImage" />
          </div>
          <div className="rightModal">
            <h5>{job.employer_name}</h5>
            <div className="hrContainer">
              <hr className="centeredHr" />
            </div>
            <p> {truncatedJobDescription === "" ? "Description Not Available ! ": truncatedJobDescription} </p>
            <a href={job.employer_website} className="ModaleLinke">Our WebSite <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} className="ModalButton">
            Close
          </Button>
          <Button variant="primary" onClick={() => handleApplyToJob(job.job_apply_link)} className="ModalButton">
            Applay To Job
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Details;
