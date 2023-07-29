import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "./CustomCard.css";
import Details from "../Details/Details";
import { useAuth0 } from "@auth0/auth0-react";
import Company from "../Assest/company.jpg";
import { error } from "jquery";

const CustomCard = (props) => {
  let data = props.data;
  const { user, isAuthenticated } = useAuth0();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAlert, setShowAlert] = useState(true);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    // Fetch the user's saved jobs if the user is authenticated
    if (isAuthenticated && user && user.sub) {
      fetchUserSavedJobs();
    }
  }, [fetchUserSavedJobs]);

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  async function fetchUserSavedJobs() {
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/jobs/allSavedJob`;
      const response = await fetch(url);
      const mydata = await response.json();
      setSavedJobs(mydata);
    } catch (error) {
      console.log("Error fetching user's saved jobs:", error.message);
    }
  }


  const userSavedJobs = isAuthenticated && user && user.sub ? savedJobs.filter((job) => job.sub === user.sub) : [];

  async function handleSaveJob(obj) {
    if (isAuthenticated) {
      const jobId = obj.job_id;

      if (userSavedJobs.some((job) => job.job_id === jobId)) {
        alert("You have already saved this job.");
      }

      else {
        let url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
        const jobData = {
          job_title: obj.job_title,
          employer_name: obj.employer_name,
          employer_logo: obj.employer_logo,
          employer_website: obj.employer_website,
          job_highlights: obj.job_highlights,
          job_apply_link: obj.job_apply_link,
          sub: user.sub,
          job_city: obj.job_city,
          job_country: obj.job_country,
          job_id: obj.job_id,
          job_posted_at_datetime_utc : (obj.job_posted_at_datetime_utc).substring(0, 10)
        };
        //.substring(0, 10);
        try {
          let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jobData),
          });

          if (response.status === 201) {
            alert("Added successfully");
          } else {
            console.log("Error:", error , error.message);
            alert("Failed to add Job else");
          }
        } catch (error) {
          console.log("Error:", error.message);
          alert("Failed to add Job catch");
        }
      } 
    }
      // IF !isAuthenticated
      else {
        alert("You have to login to add jobs to your profile");
      }
  }




  return (
    <div>
      {data.length === 0 ? (
        <div className="alert-container">
          <Alert
            show={showAlert}
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            className="alert"
          >
            <Alert.Heading>Attention!</Alert.Heading>
            <p>Job Title Or Location Is Not Found.</p>
          </Alert>
        </div>
      ) : (
        <div className="con">
          {data.map((obj, i) => (

            <div className="card" key={i}>

              {/* <div className="divafterbar"> */}


              <h2 className="Maintitle" style={{ height: "60px", width: "100%", whiteSpace: "normal", wordWrap: "break-word" }}>{obj.employer_name}</h2>
              <h5 className="title" style={{ top: "270px" }}>{obj.job_city || "Not specified"} , {obj.job_country || "Not specified"} </h5>
              {/* <h5 className="title" style={{ top: "310px" }}>{obj.job_country || "Not specified"}</h5> */}
              <h5 className="title_job" style={{ top: "350px" }}>{obj.job_title}</h5>


              <button className="button" onClick={() => handleSaveJob(obj)}><span>Save</span></button>
              <button className="button" style={{ left: "230px" }} onClick={() => handleShowModal(obj)}><span>More</span></button>

              {/* </div> */}

              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                {/* <circle className="stroke" cx="60" cy="60" r="50"> */}
                <img className="compImg" src={obj.employer_logo === "" ? Company : obj.employer_logo} alt="employer_logo" />
                {/* </circle> */}
              </div>

            </div>
          ))}
        </div>
      )}
      {showModal && (
        <Details job={selectedJob} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default CustomCard;