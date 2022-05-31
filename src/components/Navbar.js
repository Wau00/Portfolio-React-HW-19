import React from "react";
import { Navbar, Container, Nav, } from "react-bootstrap"
function NavbarHome() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Walter Underwood</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#AboutMe">About Me</Nav.Link>
                        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#Contact">Contact Me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Resume">CV</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarHome;