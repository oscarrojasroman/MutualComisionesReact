import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';
import logo from "../../img/logo2.png";
import { IoIosPerson } from 'react-icons/io';

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
           
            <NavItem eventKey={4} componentClass={Link} href="/login" to="/login">
              <IoIosPerson/> Cerrar Sesion
            </NavItem>
          </Nav>
        </Navbar.Collapse>        
      </Navbar>
    )
  }
}
