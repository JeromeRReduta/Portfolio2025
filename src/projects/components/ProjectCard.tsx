import type { JSX } from "react";
import type Project from "../entities/Project.ts";
import styles from "../design/Projects.module.css";

export default function ProjectCard({
    project,
}: {
    project: Project;
}): JSX.Element {
    const { imageSrc, title, description } = project;
    return (
        <div id={styles["project-card"]}>
            <div className={styles["project-card_img-container"]}>
                <img
                    className={styles["project-card_img"]}
                    src={imageSrc}
                    alt="alt text"
                />
                <h3 className={styles["project-card_title"]}>{title}</h3>
                <div className={styles["project-card_description"]}>
                    {description}
                </div>
            </div>
        </div>
    );
}
