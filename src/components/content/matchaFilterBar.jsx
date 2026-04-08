import { Col, Form, Row } from "react-bootstrap";

export default function MatchaFilterBar({ category, setCategory, sortBy, setSortBy }) {
    return (
        <Row className="mb-4">
            <Col md={6} className="mb-3 mb-md-0">
                <Form.Group>
                    <Form.Label>Filter by Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Powder">Powder</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Method">Method</option>
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col md={6}>
                <Form.Group>
                    <Form.Label>Sort Posts</Form.Label>
                    <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="rating-desc">Highest Rating</option>
                        <option value="rating-asc">Lowest Rating</option>
                        <option value="bitterness-asc">Lowest Bitterness</option>
                        <option value="bitterness-desc">Highest Bitterness</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    );
}