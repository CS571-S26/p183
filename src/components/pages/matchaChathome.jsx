import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import MatchaHero from "../content/matchaHero.jsx";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function MatchaChathome() {
    const { posts } = useMatchaBook();
    const featuredPosts = posts.slice(0, 3);

    return (
        <Container className="py-5">
            <MatchaHero />

            <h2 className="mb-4">Featured Matcha Posts</h2>
            <Row>
                {featuredPosts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={post.image}
                                alt={`Matcha post for ${post.title}`}
                                className="post-image"
                            />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.description}</Card.Text>
                                <Button as={NavLink} to={`/posts/${post.id}`} variant="outline-success">
                                    View Details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="mt-5 text-center">
                <h2 className="h4">Contact MatchaBook</h2>
                <p>Email: rain@matchabook.demo</p>
                <p>Phone: (608) 555-0147</p>
            </div>
        </Container>
    );
}