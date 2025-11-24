import type { JSX } from "react";
import styles from "../design/Projects.module.css";
import NavArrow from "../../shared/components/NavArrow.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import useProjects from "../stores/ProjectContext.tsx";

export default function ProjectsPage(): JSX.Element {
    const { allProjects } = useProjects();
    console.log("all projects", allProjects);
    return (
        <section id={styles.project}>
            <NavArrow direction="UP" url="/" message="WELCOME" />
            {/* <InfiniteScroll></InfiniteScroll> */}
            <NavArrow direction="DOWN" url="/contact-me" message="CONTACT ME" />
        </section>
    );
}
