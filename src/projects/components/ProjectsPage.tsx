import type { JSX } from "react";
import { useProjects } from "../stores/ProjectContext";
import type { ContextStatus } from "../../shared/entities/ContextStatus";
import "react-multi-carousel/lib/styles.css";
import "../design/carousel.css";

import styles from "../design/Projects.module.css";
import ProjectCard from "./ProjectCard";
import NavArrow from "../../shared/components/NavArrow";
import Carousel from "react-multi-carousel";
import ArrowSvg from "../../assets/right-arrow.svg?react";
import "../../shared/design/base.css";
import type React from "react";
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

const statusToElement: Map<ContextStatus, JSX.Element> = new Map([
    ["LOADING", <LoadingMessage />],
    ["ERROR", <Error />],
    ["SUCCESS", <Projects />],
]);

export default function ProjectsPage(): JSX.Element {
    const { status } = useProjects();

    const content: JSX.Element = statusToElement.get(status)!;
    return <section className={styles["projects"]}>{content}</section>;
}

function LoadingMessage(): JSX.Element {
    return (
        <div className={styles["projects__no_content_message"]}>Loading...</div>
    );
}

function Error(): JSX.Element {
    return <div className={styles["projects__no_content_message"]}>Error</div>;
}

function Projects(): JSX.Element {
    const { allProjects: projects, status } = useProjects();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <NavArrow
                direction={"UP"}
                flexJustify={"flex-start"}
                flexAlign={"center"}
                url={"/welcome"}
                message={"WELCOME"}
            />

            <Carousel
                className={styles["projects__carousel"]}
                responsive={responsive}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
            >
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Carousel>
            <NavArrow
                direction={"DOWN"}
                flexJustify={"flex-end"}
                flexAlign={"center"}
                url={"/contact-me"}
                message={"CONTACT ME"}
            />
        </>
    );
}

const CustomLeft = ({ onClick }: { onClick: never }) => (
    <button>
        <ArrowSvg className={null} />
    </button>
);

function LeftArrow({ onClick }: { onClick: never }) {
    return (
        <button className="" onClick={onClick}>
            <ArrowSvg className={null} />
        </button>
    );
}

function RightArrow({ onClick }: { onClick: never }) {
    return (
        <button className="" onClick={onClick}>
            <ArrowSvg className={null} />
        </button>
    );
}
