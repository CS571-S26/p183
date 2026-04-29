import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";
import MatchaPostCard from "../content/matchaPostCard.jsx";
import MatchaFilterBar from "../content/matchaFilterBar.jsx";

export default function MatchaPosts() {
    const { posts, toggleWishlist } = useMatchaBook();
    const { isLoggedIn } = useMatchaAuth();
    const navigate = useNavigate();

    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [message, setMessage] = useState("");

    function handleToggle(post) {
        if (!isLoggedIn) {
            setMessage("Please log in to use the wishlist.");
            setTimeout(() => {
                setMessage("");
                navigate("/login");
            }, 1200);
            return;
        }

        const added = toggleWishlist(post);

        if (added) {
            setMessage(`Added "${post.title}" to wishlist.`);
        } else {
            setMessage(`Removed "${post.title}" from wishlist.`);
        }

        setTimeout(() => setMessage(""), 2000);
    }

    const filteredPosts = posts.filter(post => {
        const matchesCategory = category === "All" || post.category === category;
        const searchLower = search.toLowerCase();

        const matchesSearch =
            post.title.toLowerCase().includes(searchLower) ||
            post.description.toLowerCase().includes(searchLower) ||
            post.aroma.toLowerCase().includes(searchLower);

        return matchesCategory && matchesSearch;
    });

    return (
        <Container className="py-5">
            <h1 className="mb-3">Matcha Posts</h1>
            <p className="text-muted">
                Browse powders, cafes, and preparation methods from the MatchaBook community.
            </p>

            {message && <Alert variant="success">{message}</Alert>}

            <MatchaFilterBar
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
            />

            <Row>
                {filteredPosts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <MatchaPostCard post={post} onToggleWishlist={handleToggle} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}