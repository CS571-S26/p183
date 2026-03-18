import Card from "react-bootstrap/Card";

export default function MatchaMessage(props) {
    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {props.category} • by {props.author}
                </Card.Subtitle>
                <Card.Text>{props.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}