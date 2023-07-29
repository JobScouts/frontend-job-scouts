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
    <div className='about'>
      <br></br>
      <section className="about-jobscouts">
        <h1>Welcome to JobScouts - Your Ultimate Job Search Companion!</h1>
        <p>
          At JobScouts, we understand that finding the perfect job can be a challenging and time-consuming process.
          That's why we've created a one-stop platform to help job seekers like you efficiently navigate the job market and discover exciting career opportunities that align with your skills and aspirations.
        </p>
        <br></br>
        <h2>Our Mission:</h2>
        <p>Our mission at JobScouts is to empower job seekers by providing them with the most comprehensive and user-friendly job search experience possible.
          We strive to connect talented individuals with their dream jobs and enable companies to find the perfect candidates for their openings.
          We believe that the right job can transform lives, enhance productivity, and drive innovation, and we are committed to being the catalyst for this positive change.
        </p>
        <p>Join JobScouts today and take the next step towards a fulfilling and rewarding career.
          Let us be your trusted companion in the pursuit of your professional goals. Happy job hunting!
        </p>
      </section>
      <div className='title-team'>
        <h1>Our Team</h1>
        <div className="card-container-about">
            {/* 1 */}
          <Card className="AboutcardImage">
            <Card.Img variant="top" src={MhmdS} className='imgc' />
            <Card.Body>
              <Card.Title>Mohamad Samara</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

            {/* 2 */}
          <Card className="AboutcardImage">
            <Card.Img variant="top" src={Aws} className='imgc' />
            <Card.Body>
              <Card.Title>Aws Alomari</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 3 */}
          <Card className="AboutcardImage">
            <Card.Img variant="top" src={Farah} className='imgc' />
            <Card.Body>
              <Card.Title>Farah Elaydi</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 4 */}
          <Card className="AboutcardImage">
            <Card.Img variant="top" src={Mhamd} className='imgc' />
            <Card.Body>
              <Card.Title>Mohammad Mustafa</Card.Title>
              <Card.Text>
                Full-Stack Developer
              </Card.Text>
            </Card.Body>
          </Card>

          {/* 5 */}
          <Card className="AboutcardImage">
            <Card.Img variant="top" src={saif} className='imgc' />
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
