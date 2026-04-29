import { Col, Form, Row } from "react-bootstrap";

export default function MatchaFilterBar({
    search,
    setSearch,
    category,
    setCategory
}) {
    return (
        <Row className="mb-4">
            <Col md={6} className="mb-3">
                <Form.Group>
                    <Form.Label htmlFor="search-posts">Search</Form.Label>
                    <Form.Control
                        id="search-posts"
                        type="text"
                        placeholder="Search by title, aroma, or description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
                <Form.Group>
                    <Form.Label htmlFor="filter-category">Category</Form.Label>
                    <Form.Select
                        id="filter-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Powder">Powder</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Method">Method</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    );
}