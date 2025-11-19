import { Outlet } from "react-router";
import Header from "./Header.tsx";

export default function BaseLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}
