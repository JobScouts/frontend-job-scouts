import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import search from "../Assest/search.jpg";
import { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import "react-spinner-animated/dist/index.css";
import Update from "../updte/UpdateComponent";
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
    getِAllJobs();
    console.log(data);
  };
  async function getِAllJobs() {
    try {
      const url = process.env.REACT_APP_SERVER_URL;
      const response = await fetch(
        `${url}/jobSearch?jobTitle=${jobTitle}&country=${location}`
      );
      const allJobs = await response.json();
      console.log(allJobs);
      setData(allJobs);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    getِAllJobs();
  }, []);
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <Container>
        <div className="left">
          <h1>Discover Your Perfect Job Opportunity :</h1>
          <Row className="justify-content-center align-items-center mt-5">
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Form.Control
                type="search"
                placeholder="JobTitle"
                aria-label="JobTitle"
                className="search-bar1"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <Form.Control
                type="search"
                placeholder="Location"
                aria-label="Location"
                className="search-bar2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Button
                variant="success"
                className="search-btn"
                onClick={handleShowCards}
              >
                Search Jobs
              </Button>
            </Col>
          </Row>
        </div>
        <div className="right">
          <Col xs={12} md={6} className="d-flex justify-content-end">
            <img src={search} alt="Search Icon" className="search-icon" />
          </Col>
        </div>

      </Container>
      {showCard && <CustomCard data={data} />}

      <Update />
    </div>
  );
}

export default Home;
