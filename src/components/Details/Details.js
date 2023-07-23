import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Company from'../Assest/company.jpg'

const Details = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>employer_name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Company} alt="employer_logo" style={{ width: "100px", height: "auto" }} />
          <p>Our WebSite: employer_website</p>
          <p>Location: job_city, job_country</p>
          <p>Job Title: job_title</p>
          <p>Job Qualifications: job_highlights</p>
          <p>Job Salary: job_min_salary - job_max_salary</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="https://chat.openai.com/?model=text-davinci-002-render-sha" target="_blank">
            <Button variant="primary" onClick={handleClose}>
              Apply To Job
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Details;
