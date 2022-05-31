import React from "react";
import { Navbar, Container, Nav, } from "react-bootstrap"

const styles = {
    navTitle: {
        margin: 20,
        color: '#fff',
        justifyContent: 'center',
        border: '2px solid',
        borderRadius: '30%',
        fontWeight: 'normal',
        fontSize: '30px',
        fontfamily: "'Ultra', sans-serif",
        textShadow: '2px 2px 4px #000000',
    },
    navText: {
        margin: 20,
        color: '#fff',
        justifyContent: 'center',
        fontWeight: 'normal',
        fontSize: '22px',
        fontfamily: "'Ultra', sans-serif",
        textShadow: '2px 2px 4px #000000'
    },
    navResume: {
        margin: 20,
        color: '#fff',
        justifyContent: 'center',
        border: '2px solid',
        borderRadius: '30%',
        background: '#282c34',
        fontWeight: 'normal',
        fontSize: '22px',
        fontfamily: "'Ultra', sans-serif",
        textShadow: '2px 2px 4px #000000',
    }
};
function NavbarHome() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#AboutMe" style={styles.navTitle}>Walter Underwood</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#AboutMe" style={styles.navText}>About Me</Nav.Link>
                        <Nav.Link href="#Portfolio" style={styles.navText}>Portfolio</Nav.Link>
                        <Nav.Link href="#Contact" style={styles.navText}>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#Resume" style={styles.navResume}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarHome;