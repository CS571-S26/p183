import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router";
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext";
export default function BadgerLogin() {
    const usernameRef = useRef();
    const pinRef = useRef();
    const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);
    const navigate = useNavigate();
    function handleLoginSubmit(e) {
        e.preventDefault();
        const username = usernameRef.current.value;
        const pin = pinRef.current.value;
        if (!username || !pin) {
            alert("You must provide both a username and pin!");
            return;
        }
        if (!/^\d{7}$/.test(pin)) {
            alert("Your pin is not a 7-digit number!");
            return;
        }
        fetch("https://cs571api.cs.wisc.edu/rest/s26/hw6/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "X-CS571-ID": CS571.getBadgerId(),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                pin: pin
            })
        }).then(res => {
            if (res.status === 200) {
                alert("You have been successfully logged in!");
                setLoginStatus(username);
                sessionStorage.setItem("loginStatus", JSON.stringify(username));
                navigate("/");
            } else {
                alert("Incorrect username or pin!");
            }
        });
    }
    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="usernameInput">
                    <Form.Label>Username</Form.Label>
                    <Form.Control ref={usernameRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pinInput">
                    <Form.Label>PIN</Form.Label>
                    <Form.Control type="password" ref={pinRef} />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </>
    );
}