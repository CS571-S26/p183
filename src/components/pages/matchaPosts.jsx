import { useMemo, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import MatchaPostCard from "../content/matchaPostCard";
import MatchaFilterBar from "../content/matchaFilterBar";
import { matchaPosts } from "../../data/matchaData";

export default function MatchaPosts() {
    const [category, setCategory] = useState("All");
    const [sortBy, setSortBy] = useState("rating-desc");
    const [message, setMessage] = useState("");

    function handleAddToWishlist(post) {
        setMessage(`Added "${post.title}" to wishlist!`);
        setTimeout(() => setMessage(""), 2000);
    }

    const displayedPosts = useMemo(() => {
        let filtered = [...matchaPosts];

        if (category !== "All") {
            filtered = filtered.filter(post => post.category === category);
        }

        filtered.sort((a, b) => {
            if (sortBy === "rating-desc") return b.rating - a.rating;
            if (sortBy === "rating-asc") return a.rating - b.rating;
            if (sortBy === "bitterness-asc") return a.bitterness - b.bitterness;
            if (sortBy === "bitterness-desc") return b.bitterness - a.bitterness;
            return 0;
        });

        return filtered;
    }, [category, sortBy]);

    return (
        <Container className="py-5">
            <h1 className="mb-3">Matcha Posts</h1>
            <p className="text-muted">
                Explore matcha powders, cafe drinks, and preparation methods shared by the community.
            </p>

            {message && <Alert variant="success">{message}</Alert>}

            <MatchaFilterBar
                category={category}
                setCategory={setCategory}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />

            <Row>
                {displayedPosts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <MatchaPostCard post={post} onAddToWishlist={handleAddToWishlist} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}