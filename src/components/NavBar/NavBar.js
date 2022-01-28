
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar } from 'react-bootstrap';



export const NavBar = () => {


  return (
    
   <React.Fragment>
          
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
             
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="#available">Available</Nav.Link>
                  <Nav.Link href="#pending">Pending</Nav.Link>
                  <Nav.Link href="#sold">Sold</Nav.Link>
                  
              </Nav>
          </Navbar.Collapse>
        </Navbar>
    </React.Fragment>

  
    );
  }