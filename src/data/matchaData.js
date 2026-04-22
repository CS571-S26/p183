const base = import.meta.env.BASE_URL;

export const matchaPosts = [
    {
        id: 1,
        title: "Ippodo Sayaka",
        category: "Powder",
        rating: 5,
        bitterness: 2,
        aroma: "Fresh and grassy",
        texture: "Smooth",
        description: "Balanced, creamy, and easy to enjoy even for newer matcha drinkers.",
        image: `${base}images/shoumei.JPG`
    },
    {
        id: 2,
        title: "Tsujiri Matcha Latte",
        category: "Cafe",
        rating: 4,
        bitterness: 1,
        aroma: "Milky and soft",
        texture: "Creamy",
        description: "A sweet and approachable cafe-style matcha latte with low bitterness.",
        image: `${base}images/choji.JPG`
    },
    {
        id: 3,
        title: "Cold Whisked Oat Matcha",
        category: "Method",
        rating: 4,
        bitterness: 3,
        aroma: "Earthy",
        texture: "Light",
        description: "Refreshing and slightly bolder, especially nice on warmer days.",
        image: `${base}images/cho.JPG`
    },
    {
        id: 4,
        title: "Marukyu Koyamaen Wako",
        category: "Powder",
        rating: 5,
        bitterness: 2,
        aroma: "Elegant and sweet",
        texture: "Velvety",
        description: "Very smooth with a refined finish and beautiful green color.",
        image: `${base}images/IMG_2004.JPG`
    },
    {
        id: 5,
        title: "Nana's Green Tea",
        category: "Cafe",
        rating: 4,
        bitterness: 2,
        aroma: "Toasty and mellow",
        texture: "Rich",
        description: "A comforting cafe experience with good balance between milk and matcha.",
        image: `${base}images/IMG_2919.JPG`
    },
    {
        id: 6,
        title: "Usucha with Chasen",
        category: "Method",
        rating: 5,
        bitterness: 3,
        aroma: "Bright and grassy",
        texture: "Foamy",
        description: "Traditional whisking method that gives a fresh aroma and airy texture.",
        image: `${base}images/IMG_8709.JPG`
    }
];

export const starterWishlist = [
    {
        id: 101,
        name: "Yame Matcha Powder",
        type: "Powder"
    },
    {
        id: 102,
        name: "Matcha latte at Kettl",
        type: "Cafe"
    },
    {
        id: 103,
        name: "Koicha preparation",
        type: "Method"
    }
];