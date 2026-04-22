import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";

export default function MatchaCreatePost() {
    const { addPost } = useMatchaBook();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "Powder",
        rating: 5,
        bitterness: 2,
        aroma: "",
        texture: "",
        description: "",
        image: "images/shoumei.JPG"
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(current => ({
            ...current,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        addPost({
            ...formData,
            rating: Number(formData.rating),
            bitterness: Number(formData.bitterness)
        });

        navigate("/posts");
    }

    return (
        <Container className="py-5">
            <h1 className="mb-3">Create a Matcha Post</h1>
            <p className="text-muted">
                Share your matcha experience with the community.
            </p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select name="category" value={formData.category} onChange={handleChange}>
                        <option value="Powder">Powder</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Method">Method</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Rating</Form.Label>
                    <Form.Select name="rating" value={formData.rating} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Bitterness</Form.Label>
                    <Form.Select name="bitterness" value={formData.bitterness} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Aroma</Form.Label>
                    <Form.Control
                        name="aroma"
                        value={formData.aroma}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Texture</Form.Label>
                    <Form.Control
                        name="texture"
                        value={formData.texture}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Image Path</Form.Label>
                    <Form.Control
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="images/shoumei.JPG"
                    />
                </Form.Group>

                <Button type="submit" variant="success">
                    Publish Post
                </Button>
            </Form>
        </Container>
    );
}