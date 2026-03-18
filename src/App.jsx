import { createHashRouter, RouterProvider } from "react-router-dom";
import MatchaLayout from "./components/structural/matchaLayout";
import MatchaChathome from "./components/content/matchaChathome";
import MatchaChatroom from "./components/content/matchaChatroom";
import MatchaWishlist from "./components/content/matchaWishlist";
import MatchaAbout from "./components/content/matchaAbout";
import MatchaNoMatch from "./components/content/matchaNoMatch";

const router = createHashRouter([
  {
    path: "/",
    element: <MatchaLayout />,
    children: [
      { index: true, element: <MatchaChathome /> },
      { path: "posts", element: <MatchaChatroom /> },
      { path: "wishlist", element: <MatchaWishlist /> },
      { path: "about", element: <MatchaAbout /> },
      { path: "*", element: <MatchaNoMatch /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}