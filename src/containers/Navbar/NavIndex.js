import { Container, Nav, Navbar } from "react-bootstrap";

import React from "react";

const NavIndex = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ReadMe</Navbar.Brand>
          <Nav className="float-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#library">Library</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavIndex;
