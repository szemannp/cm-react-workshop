import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/search">
          <Nav.Link>Search</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/movielist">
          <Nav.Link>Movie List </Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar>
  )
};

export default Header;
