import { createContext, useContext, useEffect, useMemo, useState } from "react";

const MatchaAuthContext = createContext();

export function MatchaAuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("matcha-user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [registeredUsers, setRegisteredUsers] = useState(() => {
        const savedUsers = localStorage.getItem("matcha-registered-users");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("matcha-user", JSON.stringify(user));
        } else {
            localStorage.removeItem("matcha-user");
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("matcha-registered-users", JSON.stringify(registeredUsers));
    }, [registeredUsers]);

    function login(username, password) {
        const normalizedUsername = username.trim().toLowerCase();

        const foundUser = registeredUsers.find(
            (u) => u.username.toLowerCase() === normalizedUsername && u.password === password
        );

        if (!foundUser) {
            return { success: false, message: "Invalid username or password." };
        }

        setUser({ username: foundUser.username });
        return { success: true };
    }

    function logout() {
        setUser(null);
    }

    function register(username, password) {
        const trimmedUsername = username.trim();

        if (!trimmedUsername) {
            return { success: false, message: "Username is required." };
        }

        const normalizedUsername = trimmedUsername.toLowerCase();

        const alreadyExists = registeredUsers.some(
            (u) => u.username.toLowerCase() === normalizedUsername
        );

        if (alreadyExists) {
            return { success: false, message: "That username is already taken." };
        }

        const newUser = {
            username: trimmedUsername,
            password
        };

        setRegisteredUsers((current) => [...current, newUser]);
        setUser({ username: trimmedUsername });

        return { success: true };
    }

    const value = useMemo(() => ({
        user,
        isLoggedIn: !!user,
        registeredUsers,
        login,
        logout,
        register
    }), [user, registeredUsers]);

    return (
        <MatchaAuthContext.Provider value={value}>
            {children}
        </MatchaAuthContext.Provider>
    );
}

export function useMatchaAuth() {
    return useContext(MatchaAuthContext);
}