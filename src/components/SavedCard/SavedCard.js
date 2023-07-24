import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import company from '../Assest/company.jpg';
import './SavedCard.css';
// import Details from "../Details/Details";
import { useAuth0 } from '@auth0/auth0-react';

const SavedCard = () => {
  
  const { user, isAuthenticated } = useAuth0();
  const [savedJob, setSavedJob] = useState([]);

  async function handleSavedJobs() {
    const url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
    let response = await fetch(url);
    let receivedData = await response.json();
    setSavedJob(receivedData);
  }


  useEffect(() => {
    handleSavedJobs();
  }, []);

 // Check if user is authenticated and user.sub is defined before filtering
  const userSavedJobs = isAuthenticated && user && user.sub ? savedJob.filter((job) => job.sub === user.sub) : [];


  return (
    <div className="center">
      {userSavedJobs.length > 0 ? (
        userSavedJobs.map((job) => (
          <Card key={job.id} className="card">
            <Card.Body>
              <div className="card-content">
                <img src={company} alt="Card CompanyImage" className="card-image" />
                <div className="card-text">
                  <Card.Title>{job.job_title}</Card.Title>
                  <Card.Text>
                    <p>Helllo</p>
                    <p>Hello - Helllo</p>
                  </Card.Text>
                </div>
              </div>
              <div className="card-buttons">
                {/* <Button variant="secondary" onClick={handleShowModal}>More Details</Button> */}
                <Button variant="primary">UnSave</Button>
                <Button variant="primary">Apply To Job</Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No saved jobs found.</p>
      )}
      {/* {showModal && <Details />} */}
    </div>
  );
};

export default SavedCard;
