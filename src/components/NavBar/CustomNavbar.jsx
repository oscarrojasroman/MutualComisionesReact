import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import logo from "../../img/logo2.png";
import { IoIosPerson, IoIosHome, IoIosCalculator } from 'react-icons/io';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect className="aa">               
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img className="logo" alt="Logo Mutual" src={logo}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            <IoIosHome/>Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/calcular" to="/calcular">
            <IoIosCalculator/>Calcular
            </NavItem>  
                   
            <NavItem eventKey={4} componentClass={Link} href="/login" to="/login">
              <IoIosPerson/> Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
    )
  }
}
