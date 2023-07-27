import React from "react";
import { Button } from "react-bootstrap";
// import { motion } from "framer-motion";

import Interview from "../Assest/interview.jpg";
import Cv from "../Assest/ace.jpg";
import Ace from "../Assest/new.jpg";
import "./UpdateComponent.css"; 

const UpdateComponent = () => {
  return (
    <div className="container">
    <div className="mycontup">
    <div className="item" >
        <img src={Interview} alt="Interview Icon" className="icon" />
        <div className="content">
          <h4>Chart Your Path to Interview Success</h4>
          <p>
            The job interview is probably the most important step you will take
            in your job search journey. It's your best chance to show the hiring
            manager that you’re the best person for their job.
          </p>
          <a
            href="https://www.roberthalf.com.au/career-advice/interview"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="success">Ready to Shine</Button>
          </a>
        </div>
      </div>

      <div className="item">
      <img src={Cv} alt="CV Icon" className="icon" />
        <div className="content">
          <h4>Chart the Course of Your Career with a Compelling CV</h4>
          <p>
            Investing time and effort into crafting a compelling CV can
            significantly enhance your chances of success in the job market.
            It's your gateway to opening doors to new opportunities and landing
            that interview, where you can further demonstrate why you are the
            best fit for the job.
          </p>
          <a
            href="https://zety.com/blog/how-to-write-a-cv"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="success">Preparing for the Big Day</Button>
          </a>
        </div>
      </div>

      <div className="item">
        <img src={Ace} alt="Ace Icon" className="icon" />
        <div className="content">
          <h4>Unlock Success with Standout Steps</h4>
          <p>
            A new job can unlock a whole world of possibilities, but the
            pressure to favorably present your skills, experience, and your
            ability to make a good first impression can make any job search an
            intimidating endeavor.
          </p>
          <a
            href="https://www.roberthalf.com.au/career-advice/interview"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="success">19 Winning Steps</Button>
          </a>
        </div>
      </div>

    </div>
    </div>
  );
};

export default UpdateComponent;
