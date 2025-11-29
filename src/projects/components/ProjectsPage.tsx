// import type { JSX } from "react";
// // import styles from "../design/Projects.module.css"; TODO
// // import NavArrow from "../../shared/components/NavArrow.tsx";
// import InfiniteScroll from "react-infinite-scroll-component";
// import ProjectCard from "./ProjectCard.tsx";
// import { useProjects } from "../stores/ProjectContext.tsx";

import type { JSX } from "react";

// export default function ProjectsPage(): JSX.Element {
//     const { allProjects, status } = useProjects();
//     return (
//         <section id={styles.project}>
//             <NavArrow direction="UP" url="/" message="WELCOME" />
//             {status === "SUCCESS" && <ProjectCard project={allProjects![0]} />}
//             {/* <InfiniteScroll></InfiniteScroll> */}
//             <NavArrow direction="DOWN" url="/contact-me" message="CONTACT ME" />
//         </section>
//     );
// }

export default function ProjectsPage(): JSX.Element {
    return (
        <section className={"a"}>
            <div>PLACEHOLDER</div>
        </section>
    );
}
