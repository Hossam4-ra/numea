import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import './Header.css'; // Import the CSS file

const Header = () => {
  const color={color:"black" ,backgroundColor:"black"}
  const mar={margin:"5px"}
  const style={backgroundColor:"black",color:"white",borderRadius: "3px", borderRadiusColor:"black"}
  return (
    <Navbar style={color} expand="lg" className='text-light'>
      <Navbar.Brand as={ScrollLink} to="accueil" smooth={true} style={mar} duration={200} className="no-cursor">NUMEA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">

          <Nav.Link className='text-light' as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link className='text-light' as={Link} to="/a-propos">À Propos</Nav.Link>
          <Nav.Link className='text-light' as={Link} to="/nos-services">Nos Services</Nav.Link>
          <Nav.Link className='text-light' as={Link} to="/contact"><button style={style}>Nous rejoindre</button></Nav.Link>

          
        </Nav>
        <ThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
