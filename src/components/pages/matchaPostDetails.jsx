import { Button, Card, Container } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function MatchaPostDetails() {
    const { id } = useParams();
    const { getPostById, addToWishlist } = useMatchaBook();

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

    return (
        <Container className="py-5">
            <Card className="shadow-sm">
                <Card.Img variant="top" src={post.image} alt={post.title} className="details-image" />
                <Card.Body>
                    <h1>{post.title}</h1>
                    <p className="text-muted">
                        {post.category} • Rating {post.rating}/5 • Bitterness {post.bitterness}/5
                    </p>
                    <p><strong>Aroma:</strong> {post.aroma}</p>
                    <p><strong>Texture:</strong> {post.texture}</p>
                    <p><strong>Description:</strong> {post.description}</p>

                    <div className="d-flex gap-2">
                        <Button variant="success" onClick={() => addToWishlist(post)}>
                            Add to Wishlist
                        </Button>
                        <Button as={NavLink} to="/posts" variant="outline-success">
                            Back to Posts
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}