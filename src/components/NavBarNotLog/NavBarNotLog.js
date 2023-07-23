import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
// import './NavBarNotLog.css';
import logo from '../Assest/logo.png'
import { useAuth0 } from '@auth0/auth0-react';


function NavBarNotLog() {
  const { logout, isAuthenticated , loginWithRedirect} = useAuth0();

  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ height: '80px' }}>
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center navbar-brand">
            <img
              alt=""
              src={logo}
              width="110"
              height="120"
            />
            <span>JobScouts</span>
          </Navbar.Brand>
          <Nav variant="underline" defaultActiveKey="/home">

            <Nav.Item>
              <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href='/About' className="nav-link">AboutUs</Nav.Link>
            </Nav.Item>

            {/* LogIn Button */}
            {!isAuthenticated && (
              <Nav.Item>
              <Nav.Link eventKey="link-1">

                <Button variant="outline-success" className="btn-outline-success" onClick={() => { loginWithRedirect() }}>LogIn</Button>
              </Nav.Link>
            </Nav.Item>
            )}
            

            {/* LogOut Button */}
            {isAuthenticated && (
             <div>
              <Nav.Item>
              <Nav.Link href='/SavedJob' className="nav-link">saved job</Nav.Link>
            </Nav.Item>

              <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button variant="outline-success" className="btn-outline-success" onClick={()=>{logout()}}>LogOut</Button>
              </Nav.Link>
            </Nav.Item>
            </div>
            )}


            {/* <Nav.Item>
              <Nav.Link eventKey="link-1">
                <Button variant="outline-success" className="btn-outline-success">SignUp</Button>
              </Nav.Link>
            </Nav.Item> */}

          
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarNotLog;
