import { createContext, useContext } from "react";
import type { ProjectContextValues } from "./ProjectContextValues.ts";

export const ProjectContext = createContext<ProjectContextValues | null>(null);

export function useProjects(): ProjectContextValues {
    const context = useContext<ProjectContextValues | null>(ProjectContext);
    if (!context) {
        throw Error("useProjects needs provider!");
    }
    return context;
}
