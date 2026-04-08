import { useState } from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { starterWishlist } from "../../data/matchaData";

export default function MatchaWishlist() {
    const [wishlist, setWishlist] = useState(starterWishlist);

    function handleRemove(id) {
        setWishlist(current => current.filter(item => item.id !== id));
    }

    return (
        <Container className="py-5">
            <h1 className="mb-3">Wishlist</h1>
            <p className="text-muted">
                Keep track of powders, cafes, and methods you want to try next.
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
                                <strong>{item.name}</strong>{" "}
                                <Badge bg="secondary">{item.type}</Badge>
                            </div>
                            <Button variant="outline-danger" size="sm" onClick={() => handleRemove(item.id)}>
                                Remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Container>
    );
}