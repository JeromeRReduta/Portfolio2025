import type { JSX } from "react";
import styles from "../design/Projects.module.css";
import NavArrow from "../../shared/components/NavArrow.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import useProjects from "../stores/ProjectContext.tsx";
import ProjectCard from "./ProjectCard.tsx";

export default function ProjectsPage(): JSX.Element {
    const { allProjects, status } = useProjects();
    console.log("all projects", allProjects);
    return (
        <section id={styles.project}>
            <NavArrow direction="UP" url="/" message="WELCOME" />
            {status === "SUCCESS" && <ProjectCard project={allProjects![2]} />}
            {/* <InfiniteScroll></InfiniteScroll> */}
            <NavArrow direction="DOWN" url="/contact-me" message="CONTACT ME" />
        </section>
    );
}
