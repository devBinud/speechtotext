import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar =()=> {
  return (
    <Navbar bg="" expand="lg" fixed="top" variant="dark" className='py-3' style={{backgroundColor:'#20104D'}}>
      <Container>
      <Navbar.Brand href="#">
            <img
              alt=""
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            EasySpeak
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link className="mx-1" href="#about">About</Nav.Link>
            <Nav.Link className="mx-1" href="#aitools">New AI Tools</Nav.Link>
            <Nav.Link className="mx-1" href="#blogs">Blogs</Nav.Link>
            <Nav.Link className="mx-1" href="#contact">Contact</Nav.Link>
          </Nav>
          <div class="d-flex" role="search">
            <a href="{#}" className='login-link'>Log in</a>
            <button className="navbar-right-button">Sign up for free</button>
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;