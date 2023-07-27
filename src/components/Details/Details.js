import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Company from "../Assest/company.jpg";
import "./Details.css";

const Details = ({ job, handleCloseModal }) => {
  const [show, setShow] = useState(false);
  const [showQualifications, setShowQualifications] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleQualifications = () => {
    setShowQualifications(!showQualifications);
  };

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleApplyToJob = (applyLink) => {
    window.open(applyLink, "_blank");
  };

  return (
    <div>
      <div className="firs">
        <Modal
          show={true}
          onHide={handleCloseModal}
          size="xl"
          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="example-custom-modal-styling-title"
              style={{ textAlign: "center" }}
            >
              {job.employer_name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={job.employer_logo === "" ? Company : job.employer_logo}
              alt={job.employer_name}
              className="company-logo"
              style={{
                width: "200px",
                height: "200px",
                display: "block",
                margin: "0 auto",
              }}
            />
            <p >
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
            <p className="myp">
              <b>Job Qualifications:</b>{" "}
              {showQualifications
                ? job.job_highlights
                : job.job_highlights === ""
                ? "No Qualifications Needed !"
                : job.job_highlights.substring(0, 150) + " ..."}
            </p >
            {job.job_highlights && (
              <Button
                className="see-more-button"
                onClick={handleQualifications}
              >
                {showQualifications ? "Read Less" : "Read More"}
              </Button>
            )}
            <p className="myp">
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
            <div className="d-flex justify-content-between w-100">
              {" "}
              {/* Use flexbox */}
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleApplyToJob(job.job_apply_link)}
              >
                Apply To Job
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Details;
