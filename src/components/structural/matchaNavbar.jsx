import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaNavbar() {
    const { wishlist, clearWishlist } = useMatchaBook();
    const { user, isLoggedIn, logout } = useMatchaAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        clearWishlist();
        navigate("/");
    }

    return (
        <Navbar expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">
                    MatchaBook
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="matcha-nav" />
                <Navbar.Collapse id="matcha-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                        <Nav.Link as={NavLink} to="/create">Create Post</Nav.Link>
                        <Nav.Link as={NavLink} to="/wishlist">
                            Wishlist <Badge bg="success">{isLoggedIn ? wishlist.length : 0}</Badge>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>

                        {isLoggedIn ? (
                            <>
                                <Navbar.Text className="mx-lg-3">
                                    Signed in as <strong>{user.username}</strong>
                                </Navbar.Text>
                                <Button variant="secondary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}