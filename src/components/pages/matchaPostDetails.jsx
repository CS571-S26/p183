import { Button, Card, Container, Alert } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaPostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getPostById, toggleWishlist, isInWishlist, deletePost } = useMatchaBook();
    const { isLoggedIn, user } = useMatchaAuth();
    const [message, setMessage] = useState("");

    const post = getPostById(id);

    if (!post) {
        return (
            <Container className="py-5">
                <h1>Post not found</h1>
                <Button as={NavLink} to="/posts" variant="success">
                    Back to Posts
                </Button>
            </Container>
        );
    }

    const saved = isInWishlist(post.id);
    const isOwner = isLoggedIn && post.author && user?.username === post.author;

    function handleWishlistClick() {
        if (!isLoggedIn) {
            setMessage("Please log in to use the wishlist.");
            setTimeout(() => {
                setMessage("");
                navigate("/login");
            }, 1200);
            return;
        }

        toggleWishlist(post);
    }

    function handleDelete() {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (!confirmed) return;

        deletePost(post.id);
        navigate("/posts");
    }

    return (
        <Container className="py-5">
            {message && <Alert variant="success">{message}</Alert>}

            <Card className="shadow-sm">
                <Card.Img
                    variant="top"
                    src={post.image}
                    alt={`Detailed image for ${post.title}`}
                    className="details-image"
                />
                <Card.Body>
                    <h1>{post.title}</h1>
                    <p className="text-muted">
                        {post.category} • Rating {post.rating}/5 • Bitterness {post.bitterness}/5
                    </p>

                    {post.author && (
                        <p className="text-muted">
                            <strong>Posted by:</strong> {post.author}
                        </p>
                    )}

                    <p><strong>Aroma:</strong> {post.aroma}</p>
                    <p><strong>Texture:</strong> {post.texture}</p>
                    <p><strong>Description:</strong> {post.description}</p>

                    <div className="d-flex gap-2 flex-wrap">
                        <Button
                            variant={saved ? "secondary" : "outline-success"}
                            onClick={handleWishlistClick}
                        >
                            {saved ? "Saved" : "Add to Wishlist"}
                        </Button>

                        <Button as={NavLink} to="/posts" variant="secondary">
                            Back to Posts
                        </Button>

                        {isOwner && (
                            <Button variant="danger" onClick={handleDelete}>
                                Delete Post
                            </Button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}