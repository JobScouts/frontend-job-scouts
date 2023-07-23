import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import company from "../Assest/company.jpg";
import "./Card.css";

const CustomCard = () => {
  return (
    <div className="main">
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card><Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={company} alt="employer_logo" className="logo"/>
        <Card.Body>
          <Card.Title className="title">employer_name</Card.Title>
          <Card.Text>
            <div className="location">
              <p>job_city</p> <p>,</p> <p>job_country</p>
            </div>
            <div className="job">
              <p>job_title</p>
              <span>
                <b>job_min_salary</b> <b>job_max_salary</b>
              </span>
            </div>
          </Card.Text>
          <Button variant="primary" className="custom-button btn">More Details</Button>
          <Button variant="primary" className="btn">Save</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CustomCard;
