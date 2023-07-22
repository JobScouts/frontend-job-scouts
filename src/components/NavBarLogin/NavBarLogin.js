import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBarLogin.css'; 
import logo from '../Assest/logo.png'

function NavBartLogin() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ height: '80px' }}> 
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center navbar-brand"> 
          <img
              alt=""
              src={logo}             
              width="110"
             height="120"
             />
             {/* neeew */}
            <span>JobScouts</span>
          </Navbar.Brand>
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/About' className="nav-link">AboutUs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">My Job</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">LogOut</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBartLogin;
