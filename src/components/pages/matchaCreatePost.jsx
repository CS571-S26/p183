import { useState } from "react";
import { Alert, Button, Container, Form, Image } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useMatchaBook } from "../context/matchaBookContext.jsx";
import { useMatchaAuth } from "../context/matchaAuthContext.jsx";

export default function MatchaCreatePost() {
    const { addPost } = useMatchaBook();
    const { isLoggedIn, user } = useMatchaAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "Powder",
        rating: 5,
        bitterness: 2,
        aroma: "",
        texture: "",
        description: "",
        image: ""
    });

    const [imagePreview, setImagePreview] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(current => ({
            ...current,
            [name]: value
        }));
    }

    function handleImageUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setErrorMessage("Please upload a valid image file.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setErrorMessage("Please upload an image smaller than 2MB.");
            return;
        }

        setErrorMessage("");

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result;
            setFormData(current => ({
                ...current,
                image: result
            }));
            setImagePreview(result);
        };
        reader.readAsDataURL(file);
    }

    function handleSubmit(e) {
        e.preventDefault();

        addPost({
            ...formData,
            rating: Number(formData.rating),
            bitterness: Number(formData.bitterness),
            image: formData.image || `${import.meta.env.BASE_URL}images/shoumei.JPG`,
            author: user.username
        });

        navigate("/posts");
    }

    if (!isLoggedIn) {
        return (
            <Container className="py-5 text-center">
                <h1 className="mb-3">Create a Matcha Post</h1>
                <p className="text-muted mb-4">
                    Please log in to create and share your own matcha posts.
                </p>
                <Button as={NavLink} to="/login" variant="success">
                    Go to Login
                </Button>
            </Container>
        );
    }

    return (
        <Container className="py-5" style={{ maxWidth: "800px" }}>
            <h1 className="mb-3">Create a Matcha Post</h1>
            <p className="text-muted">
                Share your matcha experience with the community.
            </p>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-title">Title</Form.Label>
                    <Form.Control
                        id="post-title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-category">Category</Form.Label>
                    <Form.Select
                        id="post-category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
                        <option value="Powder">Powder</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Method">Method</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-rating">Rating</Form.Label>
                    <Form.Select
                        id="post-rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-bitterness">Bitterness</Form.Label>
                    <Form.Select
                        id="post-bitterness"
                        name="bitterness"
                        value={formData.bitterness}
                        onChange={handleChange}
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-aroma">Aroma</Form.Label>
                    <Form.Control
                        id="post-aroma"
                        name="aroma"
                        value={formData.aroma}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-texture">Texture</Form.Label>
                    <Form.Control
                        id="post-texture"
                        name="texture"
                        value={formData.texture}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="post-description">Description</Form.Label>
                    <Form.Control
                        id="post-description"
                        as="textarea"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor="post-image-upload">Upload Image</Form.Label>
                    <Form.Control
                        id="post-image-upload"
                        name="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <Form.Text>
                        Upload a JPG, PNG, or other image under 2MB.
                    </Form.Text>
                </Form.Group>

                {imagePreview && (
                    <div className="mb-4">
                        <p className="fw-semibold">Image Preview</p>
                        <Image
                            src={imagePreview}
                            alt="Preview of uploaded matcha post"
                            fluid
                            rounded
                            className="upload-preview"
                        />
                    </div>
                )}

                <Button type="submit" variant="success">
                    Publish Post
                </Button>
            </Form>
        </Container>
    );
}