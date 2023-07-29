import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './SavedCard.css';
import { useAuth0 } from '@auth0/auth0-react';
import Oops from "../Assest/Oops.avif";
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const SavedCard = () => {
  const { user, isAuthenticated } = useAuth0();
  const us = user?.sub || null; 
  console.log(us);

  const [savedJob, setSavedJob] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState('success');

  useEffect(() => {
    if (us) {
      handleSavedJobs();
    }
  }, [us]);

  async function handleSavedJobs() {
    const url = `${process.env.REACT_APP_SERVER_URL}/jobs?sub=${us}`;
    try {
      let response = await fetch(url);
      let receivedData = await response.json();
      setSavedJob(receivedData);
    } catch (error) {
      console.log('Error:', error);
      setAlertMessage('Error: Unable to fetch saved jobs.');
      setAlertVariant('danger');
    }
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

  // useEffect(() => {
  //   handleSavedJobs();
  // }, []);

  const userSavedJobs = isAuthenticated && user && user.sub? savedJob.filter((job) => job.sub === user.sub): [];


  return (
    <div className="allJobSaved">

      {alertMessage && (
        <div className="fixed-alert">
          <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
            {alertMessage}
          </Alert>
        </div>
      )}

      {userSavedJobs.length > 0 ? (
        userSavedJobs.map((job) => (

/////// awe code
<div className="samara">

<section class="light">

  {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div> */}
  <article class="postcard light blue">
    {/* <a class="postcard__img_link" href="#"> */}
      <img class="postcard__img" src={job.employer_logo} alt="Company_Image" />
    {/* </a> */}
    <div class="postcard__text t-dark">
      <h1 class="postcard__title blue">{job.job_title}</h1>
      <div class="postcard__subtitle small">
        <time datetime="2020-05-25 12:00:00" style={{fontSize:"20px"}}>
          <i class="fas fa-calendar-alt mr-2"></i>job posted at : {job.job_posted_at_datetime_utc || "Undefined"}
        </time>
      </div>
      <div class="postcard__bar"></div>
      {/* <div class="postcard__preview-txt">{job.job_highlights}</div> */}
      <ul class="postcard__tagbox">
        <li class="tag__item"><i class="fa-solid fa-trash-can"></i><button style={{background:"none" , border:"none" , padding:"4px 8px"}} onClick={()=>handleUnSaveJob(job.id)}>Un-Save</button></li>
        <li class="tag__item"><i class="fa-solid fa-arrow-right"></i><button style={{background:"none" , border:"none" , padding:"4px 8px"}} onClick={()=>handleApplyToJob(job.job_apply_link)}>Apply</button></li>
      </ul>
    </div>
  </article>

</section>

</div>
))



        ////// aws code
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