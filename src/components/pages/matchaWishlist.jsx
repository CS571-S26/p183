import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";
import MatchaPostCard from "../content/matchaPostCard.jsx";

export default function MatchaWishlist() {
    const { wishlist, toggleWishlist } = useMatchaBook();
    const { isLoggedIn } = useMatchaAuth();

    if (!isLoggedIn) {
        return (
            <Container className="py-5 text-center">
                <h1 className="mb-3">Wishlist</h1>
                <p className="text-muted mb-4">
                    Please log in to save and manage your wishlist.
                </p>
                <Button as={NavLink} to="/login" variant="success">
                    Go to Login
                </Button>
            </Container>
        );
    }

    const validWishlist = wishlist.filter(
        post => post && post.title && post.image
    );

    return (
        <Container className="py-5">
            <h1 className="mb-3">Wishlist</h1>
            <p className="text-muted">
                Your saved matcha powders, cafes, and methods.
            </p>

            {validWishlist.length === 0 ? (
                <div className="empty-state text-center py-5">
                    <div className="empty-state-icon mb-3">🍵</div>
                    <h2 className="h4 mb-3">Your wishlist is empty</h2>
                    <p className="text-muted mb-4">
                        Save matcha drinks, powders, and preparation ideas here so you can come back to them later.
                    </p>
                    <Button as={NavLink} to="/posts" variant="success">
                        Browse Posts
                    </Button>
                </div>
            ) : (
                <Row>
                    {validWishlist.map(post => (
                        <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                            <MatchaPostCard
                                post={post}
                                onToggleWishlist={toggleWishlist}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}