import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import search from "../Assest/search.jpg";
import Interview from "../Assest/interview.jpg";
import Cv from "../Assest/ace.jpg";
import Ace from "../Assest/new.jpg";
import { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
// import { BarLoader } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import Company from "../Assest/company.jpg"

import "./Home.css";
function Home() {
  const [showCard, setShowCard] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleShowCards = () => {
    console.log("Job Title:", jobTitle);
    console.log("Location:", location);
    setShowCard(true);
    // getِAllJobs();
    console.log(data);
  };
  // async function getِAllJobs() {
  //   try {
  //     const url = process.env.REACT_APP_SERVER_URL;
  //     const response = await fetch(
  //       `${url}/jobSearch?jobTitle=${jobTitle}&country=${location}`
  //     );
  //     const allJobs = await response.json();
  //     console.log(allJobs);
  //     setData(allJobs);
  //     console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   getِAllJobs();
  // }, []);
  // if (loading) {
  //   return <div className="spinner-container">

  //     <svg width="100%" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
  //       <g id="spinner">
  //         <circle id="bottom" cx="138" cy="138" r="114" stroke="#121212" stroke-width="18" />
  //         <circle id="upper" cx="138" cy="138" r="123" stroke="#00B894" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="373 100" />
  //       </g>
  //     </svg>
  //   </div>
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <Container>
        <h1 className="main-heading text-on-top">
          Discover Your Perfect Job Opportunity :
        </h1>
        <Row className="justify-content-center align-items-center mt-5">
          <Col xs={12} md={6} className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="JobTitle"
              aria-label="JobTitle"
              className="form-control-custom form-control-left"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Form.Control
              type="search"
              placeholder="Location"
              aria-label="Location"
              className="form-control-custom form-control-left"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button
              variant="success"
              className="search-button"
              // onClick={handleShowCards}
            >
              Search Jobs
            </Button>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <img src={search} alt="Search Icon" className="search-icon" />
          </Col>
        </Row>


{/* i will add some design for static card to be flex */}
        <div key={1} style={{ display : "flex" , flexDirection : "row" , alignItems : "stretch" , justifyContent:"space-between" , alignContent:"space-around" , gap:"2" ,flexWrap : "wrap"}}> 

           {/* static card 1 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>



            {/* static card 2 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>



            {/* static card 3 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>




            {/* static card 4 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>



            {/* static card 5 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>




            {/* static card 6 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>




            {/* static card 7 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>



            {/* static card 8 */}

            <Card style={{ width: "20rem" }} className="card">
              <div className="logo-container">
                <Card.Img
                  variant="top"
                  src={Company}
                  alt="employer_logo"
                  className="logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="title">{"employer_name"}</Card.Title>
                <Card.Text>
                  <div className="location">
                    <p>{"city"}</p> <p>,</p> <p>{"country"}</p>
                  </div>
                  <div className="job">
                    <p>{"job_title"}</p>
                  </div>
                </Card.Text>
                <div className="button-container">
                  <Button
                    variant="primary"
                    className="custom-button btn"
                    // onClick={() => handleShowModal(obj)}
                  >
                    More Details
                  </Button>
                  <Button
                    variant="primary"
                    className="btn"
                    // onClick={() => handleSaveJob(obj)}
                  >
                    Save
                  </Button>
                </div>
              </Card.Body>
            </Card>

          </div>

      </Container>

      <div className="additional-container">
        <img
          src={Interview}
          alt="Search Icon"
          className="additional-search-icon"
        />
        <span className="additional-content">
          <h4>Chart Your Path to Interview Success</h4>
          <p>
            The job interview is probably the most important step you will take
            in your job search journey. It's your best chance to show the hiring
            manager that you’re the best person for their job.
          </p>
          <a
            href="https://www.roberthalf.com.au/career-advice/interview"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Button variant="success" className="additional-search-button">
              Ready to Shine
            </Button>
          </a>
        </span>

      </div>
      <div className="second-container">
        <span className="second-content">
          <h4>Chart the course of your career with a compelling CV</h4>
          <p>
            investing time and effort into crafting a compelling CV can
            significantly enhance your chances of success in the job market.
            It's your gateway to opening doors to new opportunities and landing
            that interview, where you can further demonstrate why you are the
            best fit for the job.
          </p>
          <a
            href="https://zety.com/blog/how-to-write-a-cv"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Button variant="success" className="second-search-button">
              Preparing for the Big Day
            </Button>
          </a>
        </span>
        <img src={Cv} alt="Search Icon" className="second-search-icon" />
      </div>
      <div className="additional-container">
        <img src={Ace} alt="Search Icon" className="additional-search-icon" />
        <span className="additional-content">
          <h4>Unlock success with standout steps</h4>
          <p>
            A new job can unlock a whole world of possibilities, but the
            pressure to favorably present your skills, experience, and your
            ability to make a good first impression can make any job search an
            intimidating endeavor.
          </p>
          <a
            href="https://www.roberthalf.com.au/career-advice/interview"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <Button variant="success" className="additional-search-button">
              19 Winning Steps
            </Button>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
