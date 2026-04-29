import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { matchaPosts as initialPosts } from "../../data/matchaData.js";
import { useMatchaAuth } from "./matchaAuthContext.jsx";

const MatchaBookContext = createContext();

export function MatchaBookProvider({ children }) {
    const { isLoggedIn } = useMatchaAuth();

    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem("matcha-posts");
        return savedPosts ? JSON.parse(savedPosts) : initialPosts;
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("matcha-wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem("matcha-posts", JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        localStorage.setItem("matcha-wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    function isInWishlist(postId) {
        if (!isLoggedIn) return false;
        return wishlist.some(item => String(item.id) === String(postId));
    }

    function addToWishlist(post) {
        if (!isLoggedIn) return;

        setWishlist(current => {
            const alreadyExists = current.some(item => String(item.id) === String(post.id));
            if (alreadyExists) return current;

            return [...current, post];
        });
    }

    function removeFromWishlist(id) {
        setWishlist(current => current.filter(item => String(item.id) !== String(id)));
    }

    function toggleWishlist(post) {
        if (!isLoggedIn) return null;

        if (isInWishlist(post.id)) {
            removeFromWishlist(post.id);
            return false;
        } else {
            addToWishlist(post);
            return true;
        }
    }
    function clearWishlist() {
        setWishlist([]);
        localStorage.removeItem("matcha-wishlist");
    }

    function addPost(newPost) {
        setPosts(current => [
            {
                ...newPost,
                id: Date.now()
            },
            ...current
        ]);
    }
    function deletePost(postId) {
        setPosts(current => current.filter(post => String(post.id) !== String(postId)));
        setWishlist(current => current.filter(item => String(item.id) !== String(postId)));
    }

    function getPostById(id) {
        return posts.find(post => String(post.id) === String(id));
    }

    const value = useMemo(() => ({
        posts,
        wishlist,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        addPost,
        deletePost,
        getPostById
    }), [posts, wishlist, isLoggedIn]);

    return (
        <MatchaBookContext.Provider value={value}>
            {children}
        </MatchaBookContext.Provider>
    );
}

export function useMatchaBook() {
    return useContext(MatchaBookContext);
}