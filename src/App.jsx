import { createHashRouter, RouterProvider } from "react-router-dom";
import MatchaLayout from "./components/structural/matchaLayout.jsx";
import MatchaChathome from "./components/pages/matchaChathome.jsx";
import MatchaPosts from "./components/pages/matchaPosts.jsx";
import MatchaWishlist from "./components/pages/matchaWishlist.jsx";
import MatchaAbout from "./components/pages/matchaAbout.jsx";
import MatchaNoMatch from "./components/pages/matchaNoMatch.jsx";
import MatchaPostDetails from "./components/pages/matchaPostDetails.jsx";
import MatchaCreatePost from "./components/pages/matchaCreatePost.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MatchaLayout />,
    children: [
      { index: true, element: <MatchaChathome /> },
      { path: "posts", element: <MatchaPosts /> },
      { path: "posts/:id", element: <MatchaPostDetails /> },
      { path: "wishlist", element: <MatchaWishlist /> },
      { path: "create", element: <MatchaCreatePost /> },
      { path: "about", element: <MatchaAbout /> },
      { path: "*", element: <MatchaNoMatch /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}