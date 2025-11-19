import type { JSX } from "react";
import { Link } from "react-router";
import "../../shared/design/base.css";
import "../../shared/design/header.css";

export default function Header() {
    return (
        <header>
            <LocalLinks />
            <OffsiteLinks />
        </header>
    );
}

function LocalLinks(): JSX.Element {
    return (
        <nav className="local-links">
            <Link to="#">Welcome</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Contact Me</Link>
        </nav>
    );
}

function OffsiteLinks(): JSX.Element {
    return (
        <nav className="offsite-links">
            <Link to="https://github.com/JeromeRReduta">
                <img src="/src/assets/icons8-github-30.svg" alt="github" />
            </Link>
            <Link to="https://www.linkedin.com/in/jeromerreduta">
                <img
                    src="/src/assets/iconmonstr-linkedin-3.svg"
                    height="78"
                    width="78"
                    alt="github"
                />
            </Link>
        </nav>
    );
}
