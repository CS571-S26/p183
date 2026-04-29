import { Outlet } from "react-router-dom";
import MatchaNavbar from "./matchaNavbar.jsx";

export default function MatchaLayout() {
    return (
        <>
            <MatchaNavbar />
            <Outlet />
        </>
    );
}