import "./stylesNav.css";
import React from "react";
import { Navbar, Image, Nav, Form, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" variant="dark" className="Navi">
      <Image
        src={process.env.PUBLIC_URL + "pokeIcon.png"}
        alt="PokemonApi Logo"
        className="mx-2 py-2"
      />
      <Navbar.Brand as={Link} to="/" className="pt-1">
        <h4>PokemonApi</h4>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <NavLink className="nav-link" exact={true} to="/">
            <h5>Inicio</h5>
          </NavLink>
          <NavLink className="nav-link" exact={true} to="/lista-pokemon">
            <h5>Listado de Pokemons</h5>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
