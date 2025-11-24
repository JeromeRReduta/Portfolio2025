import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ProjectProvider } from "./projects/stores/ProjectContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ProjectProvider>
                <App />
            </ProjectProvider>
        </BrowserRouter>
    </StrictMode>
);
