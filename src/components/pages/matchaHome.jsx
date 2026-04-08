import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { matchaPosts } from "../../data/matchaData";

export default function MatchaHome() {
    const featuredPosts = matchaPosts.slice(0, 3);

    return (
        <Container className="py-5">
            <div className="hero-section text-center mb-5">
                <h1 className="display-4 fw-bold">Welcome to MatchaBook</h1>
                <p className="lead">
                    A social space for matcha lovers to share reviews, discover cafes and powders,
                    and keep track of what to try next.
                </p>
                <Button as={NavLink} to="/posts" variant="success">
                    Explore Posts
                </Button>
            </div>

            <h2 className="mb-4">Featured Matcha Posts</h2>
            <Row>
                {featuredPosts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={post.image} alt={post.title} className="post-image" />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                                <Button as={NavLink} to="/posts" variant="outline-success">
                                    View More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}