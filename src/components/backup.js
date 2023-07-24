import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import search from "../Assest/search.jpg";
import Interview from "../Assest/interview.jpg";
import Cv from "../Assest/ace.jpg";
import Ace from "../Assest/new.jpg";
import { useState } from "react";
import CustomCard from '../CustomCard/CustomCard'
import "./Home.css";

function Home(props) {
  const [showCard, setShowCard] = useState(false);

  // const handleShowCard = () => {
  //   setShowCard(true);
  // };

  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleShowCards = () => {
    // Here you can access the 'jobTitle' and 'location' values.
    console.log('Job Title:', jobTitle);
    console.log('Location:', location);
    setShowCard(true);
    // You can perform any further actions you need with the input values here.
    getِAllJobs();
  };

  const [data, setData] = useState([]);

  async function getِAllJobs() {
    const url = process.env.REACT_APP_SERVER_URL
    const response = await fetch(`${url}/jobSearch?jobTitle=${jobTitle}&country=${location}`);
    const allJobs = await response.json();
    setData(allJobs);
    console.log(allJobs);
    //     const newTrendingMovies = trendingMovies.map((item) => (
    //         {
    //          ...item, comment: "static comment"
    //          }))
    //     setData(newTrendingMovies);
    }
    useEffect(() => {
      getِAllJobs();
    }, []);




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
                onClick={handleShowCards}
              >
                Search Jobs
              </Button>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-end">
              <img src={search} alt="Search Icon" className="search-icon" />
            </Col>
          </Row>

          {showCard && (<CustomCard data={props.data}/>)};
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