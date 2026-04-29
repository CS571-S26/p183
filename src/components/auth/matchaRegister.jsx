import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaRegister() {
    const { register } = useMatchaAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
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

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        const result = register(formData.username, formData.password);

        if (!result.success) {
            setErrorMessage(result.message);
            return;
        }

        setErrorMessage("");
        navigate("/");
    }

    return (
        <Container className="py-5" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Register</h1>
            <p className="text-muted">
                Create an account to join the MatchaBook community.
            </p>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="register-username">Username</Form.Label>
                    <Form.Control
                        id="register-username"
                        name="username"
                        autoComplete="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="register-password">Password</Form.Label>
                    <Form.Control
                        id="register-password"
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor="register-confirm-password">Confirm Password</Form.Label>
                    <Form.Control
                        id="register-confirm-password"
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="success">
                    Register
                </Button>
            </Form>
        </Container>
    );
}