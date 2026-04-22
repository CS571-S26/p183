import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function MatchaWishlist() {
    const { wishlist, removeFromWishlist } = useMatchaBook();

    return (
        <Container className="py-5">
            <h1 className="mb-3">Wishlist</h1>
            <p className="text-muted">
                Your saved matcha powders, cafes, and methods.
            </p>

            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ListGroup>
                    {wishlist.map(item => (
                        <ListGroup.Item
                            key={item.id}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div>
                                <strong>{item.name}</strong> <Badge bg="secondary">{item.type}</Badge>
                            </div>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}