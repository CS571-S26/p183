import { createContext, useContext, useMemo, useState } from "react";
import { matchaPosts as initialPosts, starterWishlist } from "../../data/matchaData";

const MatchaBookContext = createContext();

export function MatchaBookProvider({ children }) {
    const [posts, setPosts] = useState(initialPosts);
    const [wishlist, setWishlist] = useState(starterWishlist);

    function addToWishlist(post) {
        const wishlistItem = {
            id: post.id,
            name: post.title,
            type: post.category
        };

        setWishlist(current => {
            const alreadyExists = current.some(item => item.name === wishlistItem.name);
            if (alreadyExists) return current;
            return [...current, wishlistItem];
        });
    }

    function removeFromWishlist(id) {
        setWishlist(current => current.filter(item => item.id !== id));
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

    function getPostById(id) {
        return posts.find(post => String(post.id) === String(id));
    }

    const value = useMemo(() => ({
        posts,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        addPost,
        getPostById
    }), [posts, wishlist]);

    return (
        <MatchaBookContext.Provider value={value}>
            {children}
        </MatchaBookContext.Provider>
    );
}

export function useMatchaBook() {
    return useContext(MatchaBookContext);
}