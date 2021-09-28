import React, { useEffect } from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, FormControl  } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import { logout }from "../../actions/userActions"

const Header = ( {setSearch} ) => {


  const history =useHistory();

   const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

   const { userInfo } = userLogin;
   const LogoutHandler =()=> {
       dispatch(logout());
       history.push('/')
   }

     useEffect(() => {}, [userInfo]);

  return (
    <Navbar className="nav" bg="primary" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand>
      <Link to='/'>noteBook   </Link>
      
      
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

    <Nav className="m-auto">
      <Form inline>
        <FormControl
        type="text"
        placeholder="Szukaj"
        className="mr-sm-2"
         onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
    </Nav>

 
      <Nav>
        <Nav.Link>
          <Link to='/mynotes'>
            my notes
          </Link>
      
          </Nav.Link>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item 
          onClick={LogoutHandler}
          
          >logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>


     


    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header



// {userInfo? ( <Nav>
//         <Nav.Link>
//           <Link to='/mynotes'>
//             Moje notatki 
//           </Link>
      
//           </Nav.Link>
//         <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Mój profil</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item 
//           onClick={LogoutHandler}
          
//           >Wyloguj się</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>) : (
// <Link to='/login'>
//             login
//           </Link>

//       ) }
      