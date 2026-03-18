import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import BadgerLoginStatusContext from "../contexts/BadgerLoginStatusContext";
export default function BadgerLogout() {
    const [loginStatus, setLoginStatus] = useContext(BadgerLoginStatusContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/s26/hw6/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        }).then(res => {
            if (res.status === 200) {
                setLoginStatus(null);
                sessionStorage.removeItem("loginStatus");
                navigate("/");
            }
        });
    }, []);
    return <p>Log out</p>;
}