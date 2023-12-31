import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../Assest/green.png';
import { useAuth0 } from '@auth0/auth0-react';
import './NavBarNotLog.css'

function NavBarNotLog() {
  const { user , logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      <Navbar className="bg-body-tertiary" style={{ height: '80px' }}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center navbar-brand">
            <img alt="" src={logo} className='logo'/>
            <span style={{ fontSize: '2.1rem', fontWeight: 'bolder', color: '#006c67', marginLeft: '-35px', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>JobScouts</span>
          </Navbar.Brand>
          <Nav variant="underline" defaultActiveKey="/home" className="d-flex align-items-center">
            <Nav.Item>
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/About" className="nav-link">
                AboutUs
              </Nav.Link>
            </Nav.Item>

            {isAuthenticated && (
              <Nav.Item>
                <Nav.Link href="/SavedJob" className="nav-link">
                  My Jobs
                </Nav.Link>
              </Nav.Item>
            )}

            {!isAuthenticated ? (
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Button variant="success" className="btn-success" onClick={() => { loginWithRedirect() }}>
                    LogIn
                  </Button>
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  <Button variant="success" className="btn-success" onClick={() => { logout() }}>
                    LogOut
                  </Button>
                </Nav.Link>
              </Nav.Item>
            )}
            {isAuthenticated && (user?.picture && <Nav.Link href="/UserProfile"><img src={user.picture}  alt={user.name} className='profileNavImg'/> </Nav.Link>)}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarNotLog;