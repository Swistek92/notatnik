import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, FormControl  } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {


  const history =useHistory();

  return (
    <Navbar className="nav" bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand>
      <Link to='/'>Notatnik </Link>
      
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="m-auto">
      <Form inline>
        <FormControl
        type="text"
        placeholder="Szukaj"
        className="mr-sm-2"
        />
      </Form>
    </Nav>

      <Nav>
        <Nav.Link>
          <Link to='/mynotes'>
            Moje notatki 
          </Link>
      
          </Nav.Link>
        <NavDropdown title="Swistek" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mój profil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={()=>{
            localStorage.removeItem("userInfo");
            history.push("/")
          }}>Wyloguj się</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
