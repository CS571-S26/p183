import { createHashRouter, RouterProvider } from "react-router-dom";
import MatchaLayout from "./components/structural/matchaLayout";
import MatchaHome from "./components/pages/matchaHome";
import MatchaPosts from "./components/pages/matchaPosts";
import MatchaWishlist from "./components/pages/matchaWishlist";
import MatchaAbout from "./components/pages/matchaAbout";
import MatchaNoMatch from "./components/pages/matchaNoMatch";

const router = createHashRouter([
  {
    path: "/",
    element: <MatchaLayout />,
    children: [
      { index: true, element: <MatchaHome /> },
      { path: "posts", element: <MatchaPosts /> },
      { path: "wishlist", element: <MatchaWishlist /> },
      { path: "about", element: <MatchaAbout /> },
      { path: "*", element: <MatchaNoMatch /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}