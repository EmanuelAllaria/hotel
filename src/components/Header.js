import React, { useState, useEffect } from "react";
import "./css/Header.css";
import Logo from "../img/logo-bg-negro.png";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`${scrollY >= 25 ? "scroll" : ""}`}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="img-logo d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto align-items-lg-center gap-2">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Nosotros</Nav.Link>
          <Nav.Link href="#rooms">Habitaciones</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
          <a href="#booking" className="btn btn-primary ms-lg-3">
            Reservar
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
