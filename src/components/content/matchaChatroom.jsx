import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MatchaMessage from "./matchaMessage";

export default function MatchaChatroom() {
    const [messages] = useState([
        {
            id: 1,
            title: "Ippodo Sayaka",
            content: "Smooth texture, mild bitterness, slightly nutty finish.",
            author: "Nureen",
            category: "Powder"
        },
        {
            id: 2,
            title: "Tsujiri Cafe Latte",
            content: "Creamier and sweeter, beginner-friendly and not too grassy.",
            author: "Alya",
            category: "Cafe"
        },
        {
            id: 3,
            title: "Usucha with bamboo whisk",
            content: "Lighter body, more aroma, and clean aftertaste.",
            author: "Sara",
            category: "Method"
        }
    ]);

    return (
        <Container className="mt-4">
            <h2>Matcha Posts</h2>
            <p>Explore tasting notes, cafe reviews, and matcha preparation methods.</p>
            <Row>
                {messages.map(message => (
                    <Col key={message.id} xs={12} md={6} lg={4} className="mb-4">
                        <MatchaMessage {...message} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}