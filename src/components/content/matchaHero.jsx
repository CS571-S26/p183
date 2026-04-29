import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaHero() {
    const { isLoggedIn, user } = useMatchaAuth();

    return (
        <div className="hero-section text-center mb-5">
            <h1 className="display-4 fw-bold">Welcome to MatchaBook</h1>
            <p className="lead">
                A social space for matcha lovers to share reviews, discover cafes and powders,
                and keep track of what to try next.
            </p>
            <p>
                {isLoggedIn ? `Welcome back, ${user.username}!` : "Login to create and save your matcha discoveries."}
            </p>
            <Button as={NavLink} to="/posts" variant="success">
                Explore Posts
            </Button>
        </div>
    );
}