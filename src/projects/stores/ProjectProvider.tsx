import { useEffect, useEffectEvent, useState, type JSX } from "react";
import type Project from "../entities/Project.ts";
import type { ContextStatus } from "../../shared/entities/ContextStatus.ts";
import type { ProjectContextValues } from "./ProjectContextValues.ts";
import { ProjectContext } from "./ProjectContext.ts";

function mockProjects(): Project[] {
    return [
        {
            id: 1,
            imageSrc:
                "data:image/jpeg;base64,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",
            title: "Puppy",
            description: "Is puppy?",
            link: "https://github.com/JeromeRReduta/2412.BookBuddy/blob/ts-refactor/src/shared/book-context/stores/BookContext.tsx",
        },
        {
            id: 2,
            imageSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnefXdGJmT3iNGhPtNsJkweQbwlN_R-ThOg&s",
            title: "Puppy 2",
            description: "Second puppy",
            link: "https://github.com/JeromeRReduta/2412.BookBuddy/blob/ts-refactor/src/shared/book-context/stores/BookContext.tsx",
        },
        {
            id: 3,
            imageSrc:
                "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fk2hboo1aj02a1.jpg",
            title: "Happy Seal",
            description: "Now it's a seal, psyche",
            link: "https://github.com/JeromeRReduta/2412.BookBuddy/blob/ts-refactor/src/shared/book-context/stores/BookContext.tsx",
        },
    ];
}

export function ProjectProvider({
    children,
}: {
    children: JSX.Element;
}): JSX.Element {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [selected, setSelected] = useState<Project | null>(null); // TODO: setSelected
    const [status, setStatus] = useState<ContextStatus>("INITIALIZED");
    const getProjects = useEffectEvent(() => {
        setStatus("LOADING");
        const mocks: Project[] = mockProjects();
        setProjects(mocks);
        setStatus("SUCCESS");
    });
    useEffect(() => {
        getProjects();
    }, []);

    const value: ProjectContextValues = {
        allProjects: projects,
        selectedProject: selected,
        status,
    };
    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
}

// export default function ProjectProvider({
//     children,
// }: {
//     children: JSX.Element | JSX.Element[];
// }): JSX.Element {
//     return (
//         <ProjectContext.Provider value={null}>
//             {children}
//         </ProjectContext.Provider>
//     );
// }
