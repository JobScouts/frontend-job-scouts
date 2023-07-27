import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import company from '../Assest/company.jpg';
import './SavedCard.css';
import { useAuth0 } from '@auth0/auth0-react';
import Oops from "../Assest/Oops.avif";
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


const SavedCard = () => {
  const { user, isAuthenticated } = useAuth0();
  const [savedJob, setSavedJob] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState('success');

  async function handleSavedJobs() {
    const url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
    let response = await fetch(url);
    let receivedData = await response.json();
    setSavedJob(receivedData);
  }

  // To Open the apply link in a new tab
  const handleApplyToJob = (applyLink) => {
    window.open(applyLink, '_blank');
  };

  // To UnSave a job
  async function handleUnSaveJob(jobId) {
    const url = `${process.env.REACT_APP_SERVER_URL}/jobs/${jobId}`;
    try {
      let response = await fetch(url, {
        method: 'DELETE',
      });
      if (response.status === 204) {
        setAlertMessage('Job unsaved successfully.');
        setAlertVariant('success');

        // Refresh the list of saved jobs after unsaving one
        handleSavedJobs();
      } else {
        console.log('Error:', response.statusText);
        setAlertMessage('Error: Unable to unsave the job.');
        setAlertVariant('danger');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setAlertMessage('Error: ' + error.message);
      setAlertVariant('danger');
    }
  }

  useEffect(() => {
    handleSavedJobs();
  }, []);

  const userSavedJobs = isAuthenticated && user && user.sub ? savedJob.filter((job) => job.sub === user.sub) : [];

  return (
    <div className="center">

      {alertMessage && (
        <div className="fixed-alert">
          <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
            {alertMessage}
          </Alert>
        </div>
      )}

      {userSavedJobs.length > 0 ? (
        userSavedJobs.map((job) => (
          <Card key={job.id} className="card">
            <Card.Body>
              <div className="card-content">
                <img src={job.employer_logo === "" ? company : job.employer_logo} alt={job.employer_name} className="logo" />
                <div className="card-text">
                  <Card.Title>{job.employer_name}</Card.Title>
                  <Card.Text>
                    <p>{job.job_city}</p>
                    <p>{job.job_title}</p>
                  </Card.Text>
                </div>
              </div>
              <div className="card-buttons">
                <Button variant="primary" onClick={() => handleApplyToJob(job.job_apply_link)}>Apply To Job</Button>
                <Button variant="primary" onClick={() => handleUnSaveJob(job.id)}>Un-Save</Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div className="no-jobs-container">
          <img
            src={Oops}
            alt="No Saved Jobs"
            className="no-jobs-image"
          />
          <p className="no-jobs-text">
            Oops! You don't have any saved jobs.
            <br />
            Start exploring and saving jobs to view them here.
          </p>

          <Link to="/">
            <Button variant="primary" className="explore-button">
              Explore Jobs
            </Button>
          </Link>

        </div>

      )}
    </div>
  );
};
export default SavedCard;
