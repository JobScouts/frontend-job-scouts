import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Company from'../Assest/company.jpg'

const Details = ({ job, handleCloseModal }) => {
  let lin = job.job_apply_link;
  return (
    <div>
      <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{job.employer_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={job.employer_logo === "" ? Company : job.employer_logo}
            alt={job.employer_name}
            className="company-logo"
            style={{ width: "100px", height: "100px" }} 
          />
             
          <p><b>Our WebSite:</b> {job.employer_website === "" ? "Our Website Not Ready !" : job.employer_website}</p>
          <p><b>Location:</b> {job.job_city}, {job.job_country}</p>
          <p><b>Job Title:</b> {job.job_title}</p>
          <p><b>Job Qualifications:</b> {job.job_highlights}</p>
          <p><b>Job description:</b> {job.job_description=== "" ? "Desecription Not Available !" : job.job_description}</p>
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