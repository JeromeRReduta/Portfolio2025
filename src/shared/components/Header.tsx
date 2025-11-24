import type { JSX } from "react";
import { Link } from "react-router";
import "../../shared/design/base.css";
import styles from "../design/Header.module.css";
import GithubSVG from "../../assets/github-mark.svg?react";
import LinkedInSVG from "../../assets/LinkedIn_icon.svg?react";

export default function Header() {
    return (
        <header className={styles.header}>
            <LocalLinks />
            <OffsiteLinks />
        </header>
    );
}

function LocalLinks(): JSX.Element {
    console.log(styles.header_local_link);
    return (
        <nav className={styles.header_local}>
            <Link className={styles.header_local_link} to="#">
                Welcome
            </Link>
            <Link className={styles.header_local_link} to="#">
                Projects
            </Link>
            <Link className={styles.header_local_link} to="#">
                Contact Me
            </Link>
        </nav>
    );
}

function OffsiteLinks(): JSX.Element {
    return (
        <nav className={styles.header_offsite}>
            <Link className="svg-link" to="https://github.com/jeromeRReduta/">
                <GithubSVG />
            </Link>
            <Link
                className="svg-link"
                to="https://www.linkedin.com/in/jeromerreduta/"
            >
                <LinkedInSVG />
            </Link>
        </nav>
    );
}
