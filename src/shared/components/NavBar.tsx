import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <Link to="#">Welcome</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Contact Me</Link>
        </nav>
    );
}
