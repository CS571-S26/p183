import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MatchaNavbar() {
    return (
        <Navbar expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    MatchaBook
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="matcha-nav" />
                <Navbar.Collapse id="matcha-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                        <Nav.Link as={NavLink} to="/wishlist">Wishlist</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}