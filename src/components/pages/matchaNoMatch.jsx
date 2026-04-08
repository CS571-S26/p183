import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MatchaNoMatch() {
    return (
        <Container className="py-5 text-center">
            <h1>404</h1>
            <p>Oops! That page does not exist.</p>
            <Button as={NavLink} to="/" variant="success">
                Back Home
            </Button>
        </Container>
    );
}