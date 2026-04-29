import { Card, Col, Container, Row } from "react-bootstrap";

export default function MatchaAbout() {
    return (
        <Container className="py-5">
            <h1 className="mb-4">About MatchaBook</h1>
            <p className="mb-4">
                MatchaBook is a community-based web app concept for matcha lovers. Users can
                share tasting experiences, compare cafes and powders, and organize what they
                want to try in the future.
            </p>

            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <h2 className="h4">Discover</h2>
                            <Card.Text>
                                Browse matcha powders, cafes, and preparation styles through community posts.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <h2 className="h4">Discuss</h2>
                            <Card.Text>
                                Learn from tasting notes like bitterness, aroma, and texture to better understand preferences.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <h2 className="h4">Plan</h2>
                            <Card.Text>
                                Save powders, cafes, and matcha methods into a wishlist for future exploration.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md={8} lg={6}>
                    <Card className="shadow-sm text-center">
                        <Card.Body>
                            <h2 className="h4">Contact</h2>
                            <p className="mb-1"><strong>Email:</strong> hello@matchabook.demo</p>
                            <p className="mb-0"><strong>Phone:</strong> (608) 555-0147</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>

    );
}