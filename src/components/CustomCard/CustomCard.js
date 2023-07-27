import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./CustomCard.css";
import Details from "../Details/Details";
import { useAuth0 } from "@auth0/auth0-react";
import Company from "../Assest/company.jpg";
// import AlertTitle from '@mui/material/AlertTitle';


const CustomCard = (props) => {
  let data = props.data;
  const { user, isAuthenticated } = useAuth0();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showAlert, setShowAlert] = useState(true);

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  async function handleSaveJob(obj) {
    if (isAuthenticated) {
      let url = `${process.env.REACT_APP_SERVER_URL}/jobs`;
      const jobData = {
        job_title: obj.job_title,
        employer_name: obj.employer_name,
        employer_logo: obj.employer_logo,
        employer_website: obj.employer_website,
        job_highlights: obj.job_highlights,
        job_apply_link: obj.job_apply_link,
        sub: user.sub,
      };
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
          alert("Failed to add Job");
        }
      } catch (error) {
        console.log("Error:", error.message);
        alert("Failed to add Job");
      }
    } else {
      alert("You have to login to add jobs to your profile");
    }
  }

  return (
    <div>
    {
     data.length === 0 ? (
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
     
      <div class="con">
      {data.map((obj, i) => (

     
  <div class="card">
        <h3 class="title">{obj.employer_name}</h3>
        <h3 class="title" style={{ top: "270px" }}>{obj.job_city}</h3>
        <h3 class="title" style={{ top: "310px" }}>{obj.job_country}</h3>
        <h3 class="title" style={{ top: "350px" }}>{obj.job_title}</h3>
        <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
        </div>
        <div class="circle">
              <circle class="stroke" cx="60" cy="60" r="50" >
                <img className="compImg" src={obj.employer_logo === "" ? Company : obj.employer_logo} alt="employer_logo" />
              </circle>
        </div>
        <button class="button"  onClick={() => handleSaveJob(obj)} > <span>Save</span>  </button>
        <button class="button" style={{ left: "200px" }} onClick={() => handleShowModal(obj)}>  <span>More</span>  </button>
  </div>

                            ) 
       )// End map 
       }

</div> // End con

       ) /// End else
       
       }
       {showModal && (
         <Details job={selectedJob} handleCloseModal={handleCloseModal} />
       )}
     </div>

    //////////////////////////////////////////////////////////////////////////////////////////

    // <div className="mainDiv">


    //   <div class="con">
    //     {/* Custom */}
    //         <div class="card" style={{ backgroundColor: "red" }}>
    //               <h3 class="title">{obj.employer_name}</h3>
    //               <h3 class="title" style={{ top: "270px" }}>{obj.job_city}</h3>
    //               <h3 class="title" style={{ top: "310px" }}>{obj.job_country}</h3>
    //               <h3 class="title" style={{ top: "350px" }}>{obj.obj.job_title}</h3>
    //               <div class="bar">
    //                     <div class="emptybar"></div>
    //                     <div class="filledbar"></div>
    //               </div>
    //               <div class="circle">
    //                     <circle class="stroke" cx="60" cy="60" r="50" >
    //                       <img className="compImg" src={obj.employer_logo === "" ? Company : obj.employer_logo} alt="employer_logo" />
    //                     </circle>
    //               </div>
    //               <button class="button"><span>Save</span></button>
    //               <button class="button" style={{ left: "200px" }}><span>More</span></button>
    //         </div>
    //   </div>


    // </div>

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // <div className="mainDiv"> 
    //   <div className="custmcontainer">
    //     <div class="card">
    //         <h3 class="title">Card 2</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <h3 class="title">Card 3</h3>
    //         <div class="bar">
    //             <div class="emptybar"></div>
    //             <div class="filledbar"></div>
    //         </div>
    //         <div class="circle">
    //             <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
    //                 <circle class="stroke" cx="60" cy="60" r="50" />
    //             </svg>
    //         </div>
    //     </div>
    
    
    // </div>
    
    // </div>

  );
};

export default CustomCard;
