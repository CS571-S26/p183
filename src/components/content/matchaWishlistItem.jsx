import { Badge, Button, ListGroup } from "react-bootstrap";

export default function MatchaWishlistItem({ item, onRemove }) {
    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <div>
                <strong>{item.name}</strong> <Badge bg="secondary">{item.type}</Badge>
            </div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => onRemove(item.id)}
            >
                Remove
            </Button>
        </ListGroup.Item>
    );
}