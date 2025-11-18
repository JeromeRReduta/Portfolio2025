import { Outlet } from "react-router";
import NavBar from "./NavBar.tsx";

export default function BaseLayout() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
