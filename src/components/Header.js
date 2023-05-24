import React, { useState, useEffect } from 'react';
import './css/Header.css'
import Logo from '../img/logo-bg-negro.png'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Componente({ scrollY }) {
  return <span>{scrollY}</span>;
}

function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`${scrollY >= 25 ? 'scroll' : ''}`} collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="img-logo d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
          <NavDropdown title="Habitaciones" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Bassic 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Intermediate</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Suite</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Todas las habitaciones</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Iniciar sesión</Nav.Link>
          <Nav.Link href="#signup">Registrarse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header