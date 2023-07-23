import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import Aws from '../Assest/aws.JPG';
import Mhamd from '../Assest/mhamad.jpg';
import Farah from '../Assest/fara.jpg'
import MhmdS from '../Assest/mhmds.jpg'
import saif from '../Assest/saif.jpeg'

const About = () => {
  return (
    <div>
      <br></br>
      <div className="about-jobscouts">
        <h2>Welcome to JobScouts</h2>
        <p>
          JobScouts is a revolutionary platform that connects job seekers and employers
          across the globe. JobScouts will be the world's largest professional network
          designed to help you find the perfect job or ideal candidate for your company.
        </p>
        <p>
          Whether you are a recent graduate looking to kickstart your career, an experienced
          professional seeking new opportunities, or a company in search of top talent,
          JobScouts has got you covered. Join our diverse community today and start
          building meaningful connections to advance your career or grow your business.
        </p>

        <h2>Our Team</h2> 
        
        <div className="card-container">
          <Card className="card">
            <Card.Img variant="top" src={MhmdS} className='imgc'/>
            <Card.Body>
              <Card.Title>Mohamad Samara</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img variant="top" src={Aws} className='imgc' />
            <Card.Body>
              <Card.Title>Aws Alomari</Card.Title>
              <Card.Text>
              Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img variant="top" src={Farah} className='imgc'/>
            <Card.Body>
              <Card.Title>Farah Elaydi</Card.Title>
              <Card.Text>
              Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img variant="top" src={Mhamd} className='imgc'/>
            <Card.Body>
              <Card.Title>Mohammad Mustafa</Card.Title>
              <Card.Text>
              Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img variant="top" src={saif} className='imgc'/>
            <Card.Body>
              <Card.Title>Saif Yahia</Card.Title>
              <Card.Text>
              Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
