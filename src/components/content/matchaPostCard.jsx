import { Badge, Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function MatchaPostCard({ post, onToggleWishlist }) {
    const { isInWishlist } = useMatchaBook();
    const saved = isInWishlist(post.id);

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={post.image}
                alt={`Matcha post for ${post.title}`}
                className="post-image"
            />
            <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    <Badge bg="success">{post.category}</Badge>
                </div>

                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="text-muted small">
                    Rating: {post.rating}/5 • Bitterness: {post.bitterness}/5
                </Card.Text>
                <Card.Text>
                    <strong>Aroma:</strong> {post.aroma}
                </Card.Text>
                <Card.Text className="flex-grow-1">{post.description}</Card.Text>

                <div className="d-flex gap-2 mt-2">
                    <Button as={NavLink} to={`/posts/${post.id}`} variant="success">
                        View Details
                    </Button>

                    <Button
                        variant={saved ? "secondary" : "outline-success"}
                        onClick={() => onToggleWishlist(post)}
                    >
                        {saved ? "Remove" : "Add to Wishlist"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}