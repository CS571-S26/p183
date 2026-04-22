import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function matchaNavbar() {
    const { wishlist } = useMatchaBook();

    return (
        <Navbar expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">
                    MatchaBook
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="matcha-nav" />
                <Navbar.Collapse id="matcha-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                        <Nav.Link as={NavLink} to="/create">Create Post</Nav.Link>
                        <Nav.Link as={NavLink} to="/wishlist">
                            Wishlist <Badge bg="success">{wishlist.length}</Badge>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}