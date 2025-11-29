import type { JSX } from "react";
import type Project from "../entities/Project.ts";
import styles from "../design/ProjectCard.module.css";
import { Link } from "react-router";

export default function ProjectCard({
    project,
}: {
    project: Project;
}): JSX.Element {
    const { imageSrc, title, description } = project;
    return (
        <Link className={styles["p_card"]} to={project.link}>
            <h3 className={styles["p_card__title"]}>{title}</h3>
            <img
                className={styles["p_card__image"]}
                src={imageSrc}
                alt="alt text"
            />
            <div className={styles["p_card__description"]}>{description}</div>
        </Link>
    );
}
