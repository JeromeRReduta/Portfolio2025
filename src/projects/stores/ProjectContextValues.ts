import type { ContextStatus } from "../../shared/entities/ContextStatus.ts";
import type Project from "../entities/Project.ts";

export interface ProjectContextValues {
    allProjects: Project[] | null;
    status: ContextStatus;
}
