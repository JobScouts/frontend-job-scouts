import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import company from '../Assest/company.jpg';
import './SavedCard.css';
import { useAuth0 } from '@auth0/auth0-react';
import Oops from "../Assest/Oops.avif";
import { Link } from 'react-router-dom';


const SavedCard = () => {
  const { user, isAuthenticated } = useAuth0();
  const [savedJob, setSavedJob] = useState([]);


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
        alert('Job unsaved successfully.');
        // Refresh the list of saved jobs after unsaving one
        handleSavedJobs();
      } else {
        console.log('Error:', response.statusText);
        alert('Failed to unsave job.');
      }
    } catch (error) {
      console.log('Error:', error.message);
      alert('Failed to unsave job.');
    }
  }

  useEffect(() => {
    handleSavedJobs();
  }, []);

  const userSavedJobs = isAuthenticated && user && user.sub ? savedJob.filter((job) => job.sub === user.sub) : [];

  return (
    <div className="center">
      {userSavedJobs.length > 0 ? (
        userSavedJobs.map((job) => (
          // <Card key={job.id} className="card">
          //   <Card.Body>
          //     <div className="card-content">
          //       <img src={job.employer_logo === "" ? company : job.employer_logo} alt={job.employer_name} className="logo" />
          //       <div className="card-text">
          //         <Card.Title>{job.employer_name}</Card.Title>
          //         <Card.Text>
          //           <p>{job.job_city}</p>
          //           <p>{job.job_title}</p>
          //         </Card.Text>
          //       </div>
          //     </div>
          //     <div className="card-buttons">
          //       <Button variant="primary" onClick={() => handleApplyToJob(job.job_apply_link)}>Apply To Job</Button>
          //       <Button variant="primary" onClick={() => handleUnSaveJob(job.id)}>Un-Save</Button>
          //     </div>
          //   </Card.Body>
          // </Card>
          <section class="light">
            <div class="container py-2">
              <div class="h1 text-center text-dark" id="pageHeaderTitle"></div>

              <article class="postcard light blue">
                {/* <a class="postcard__img_link" href="#"> */}
                <img class="postcard__img" src={job.employer_logo === "" ? company : job.employer_logo} alt={job.employer_name} />
                {/* </a> */}
                <div class="postcard__text t-dark">
                  <h1 class="postcard__title blue"><a href={job.employer_website}>{job.job_title}</a></h1>
                  <div class="postcard__subtitle small">
                    <location location>
                      <i class='fas fa-map-marker-alt'></i>{job.job_city}/{job.job_country}
                    </location>
                  </div>
                  <div class="postcard__bar"></div>
                  <div class="postcard__preview-txt">{job.job_highlights}</div>
                  <div className="card-buttons">
                    <Button variant="primary" onClick={() => handleApplyToJob(job.job_apply_link)}>Apply To Job</Button>
                    <Button variant="primary" onClick={() => handleUnSaveJob(job.id)}>Un-Save</Button>
                  </div>
                </div>
              </article>
            </div>
          </section>
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
