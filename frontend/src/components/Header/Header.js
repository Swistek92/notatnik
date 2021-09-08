import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, FormControl  } from 'react-bootstrap'
import './Header.css';

const Header = () => {
  return (
    <Navbar className="nav" bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/">Notatnik</Navbar.Brand>
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
        <Nav.Link href="#home">Moje notatki</Nav.Link>
        <NavDropdown title="Swistek" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mój profil</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Wyloguj się</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
