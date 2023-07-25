import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./CustomCard.css";
import Details from "../Details/Details";
import { useAuth0 } from "@auth0/auth0-react";
import Company from "../Assest/company.jpg";

const CustomCard = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [showAlert, setShowAlert] = useState(true);
  let data = props.data;

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleShowModal = (job) => {
    console.log("job var" + job);
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
      sub: user.sub,
    };
    // Make an HTTP POST request using fetch
    try {
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      });

      if (response.status === 201) {
        alert("Added successfully");
      } else {
        console.log("Error:", response.statusText);
        alert("Failed to add movie");
      }
    } catch (error) {
      console.log("Error:", error.message);
      alert("Failed to add movie");
    }
  }

  return (
    <div className="main">
       {data.length === 0 ? (
        <div className="alert-container">
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            className="alert"
          >
            <Alert.Heading>Attention !</Alert.Heading>
            <p>Job Title Or Location Is Not Found.</p>
          </Alert>
        </div>
      ) : (
        data.map((obj, i) => (
          <div key={i}>
            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <img
                  src={obj.employer_logo === "" ? Company : obj.employer_logo}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
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
                  <Button variant="primary" className="btn" onClick={handleSaveJob}>
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
      {showModal && <Details job={selectedJob} handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CustomCard;
