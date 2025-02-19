import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BiBorderRadius } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">NUMEA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/a-propos">À Propos</Nav.Link>
          <Nav.Link as={Link} to="/nos-services">Nos Services</Nav.Link>
          <Nav.Link as={Link} to="/contact"><button>Nous rejoindre</button></Nav.Link>
        </Nav>
        <ThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
