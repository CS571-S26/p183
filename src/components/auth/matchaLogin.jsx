import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaLogin() {
    const { login } = useMatchaAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((current) => ({
            ...current,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const result = login(formData.username, formData.password);

        if (!result.success) {
            setErrorMessage(result.message);
            return;
        }

        setErrorMessage("");
        navigate("/");
    }

    return (
        <Container className="py-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Login</h1>
            <p className="text-muted">
                Sign in to create matcha posts and manage your wishlist.
            </p>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="login-username">Username</Form.Label>
                    <Form.Control
                        id="login-username"
                        name="username"
                        autoComplete="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor="login-password">Password</Form.Label>
                    <Form.Control
                        id="login-password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /> </Form.Group>

                <Button type="submit" variant="success">
                    Login
                </Button>
            </Form>
        </Container>
    );
}