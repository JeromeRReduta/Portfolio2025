import type { JSX } from "react";
import { Link } from "react-router";
import "../../shared/design/base.css"; // TODO
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
            <Link className={styles["header__local_link"]} to="#">
                Welcome
            </Link>
            <Link className={styles["header__local_link"]} to="#">
                Projects
            </Link>
            <Link className={styles["header__local_link"]} to="#">
                Contact Me
            </Link>
        </nav>
    );
}

function OffsiteLinks(): JSX.Element {
    return (
        <nav className={styles["header__offsite"]}>
            <Link
                className={styles["header__offsite_link"]}
                to="https://github.com/jeromeRReduta/"
            >
                <GithubSVG />
            </Link>
            <Link
                className={styles["header__offsite_link"]}
                to="https://www.linkedin.com/in/jeromerreduta/"
            >
                <LinkedInSVG />
            </Link>
        </nav>
    );
}
