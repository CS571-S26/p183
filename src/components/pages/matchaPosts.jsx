import { useMemo, useState } from "react";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import MatchaPostCard from "../content/matchaPostCard.jsx";

export default function MatchaPosts() {
    const { posts, addToWishlist } = useMatchaBook();
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    function handleAdd(post) {
        addToWishlist(post);
        setMessage(`Added "${post.title}" to wishlist!`);
        setTimeout(() => setMessage(""), 2000);
    }

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesCategory = category === "All" || post.category === category;
            const searchLower = search.toLowerCase();

            const matchesSearch =
                post.title.toLowerCase().includes(searchLower) ||
                post.description.toLowerCase().includes(searchLower) ||
                post.aroma.toLowerCase().includes(searchLower);

            return matchesCategory && matchesSearch;
        });
    }, [posts, category, search]);

    return (
        <Container className="py-5">
            <h1 className="mb-3">Matcha Posts</h1>
            <p className="text-muted">
                Browse powders, cafes, and preparation methods from the MatchaBook community.
            </p>

            {message && <Alert variant="success">{message}</Alert>}

            <Row className="mb-4">
                <Col md={6} className="mb-3">
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search by title, aroma, or description..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Col>

                <Col md={6} className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Powder">Powder</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Method">Method</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredPosts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <MatchaPostCard post={post} onAddToWishlist={handleAdd} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}