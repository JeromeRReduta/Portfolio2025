import type { JSX } from "react";
import { Link } from "react-router";
import "../../shared/design/base.css";
import styles from "../design/Header.module.css";
import GithubSVG from "../../assets/github-mark.svg?react";
import LinkedInSVG from "../../assets/LinkedIn_icon.svg?react";

export default function Header(): JSX.Element {
    return (
        <header className={styles["header"]}>
            <LocalLinks />
            <OffsiteLinks />
        </header>
    );
}

function LocalLinks(): JSX.Element {
    return (
        <nav className={styles["header__local"]}>
            <Link className={styles["header__local_link"]} to="/">
                Welcome
            </Link>
            <Link className={styles["header__local_link"]} to="/projects">
                Projects
            </Link>
            <Link className={styles["header__local_link"]} to="/contact-me">
                Contact Me
            </Link>
        </nav>
    );
}

function OffsiteLinks(): JSX.Element {
    return (
        <nav className={styles["header__offsite"]}>
            <Link to="https://github.com/jeromeRReduta/">
                <GithubSVG className={styles["github_svg"]} />
            </Link>
            <Link to="https://www.linkedin.com/in/jeromerreduta/">
                <LinkedInSVG className={styles["linkedin_svg"]} />
            </Link>
        </nav>
    );
}
