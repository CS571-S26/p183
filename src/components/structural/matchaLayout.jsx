import { Outlet } from "react-router-dom";
import MatchaNavbar from "./matchaNavbar";

export default function MatchaLayout() {
    return (
        <>
            <MatchaNavbar />
            <Outlet />
        </>
    );
}