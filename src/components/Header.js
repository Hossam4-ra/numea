import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={ScrollLink} to="accueil" smooth={true} duration={200} className="no-cursor">NUMEA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={ScrollLink} to="accueil" smooth={true} duration={200} className="no-cursor">Accueil</Nav.Link>
          <Nav.Link as={ScrollLink} to="nos-services" smooth={true} duration={200}>Nos Services</Nav.Link>
          <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={200}>Contact</Nav.Link>
        </Nav>
        <ThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
