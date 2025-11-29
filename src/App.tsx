import "./shared/design/base.css";
import { Routes, Route } from "react-router";
import BaseLayout from "./shared/components/BaseLayout.tsx";
import WelcomePage from "./welcome/components/WelcomePage.tsx";
import ProjectsPage from "./projects/components/ProjectsPage.tsx";
import ContactMePage from "./contact-me/components/ContactMePage.tsx";
import ErrorPage from "./error/components/ErrorPage.tsx";

function App() {
    /**
     * TODO: / index => PortfolioPage
     * /projects /:id => ProjectDetailsPage<Project = Project>
     * /contact-me => ContactMePage
     * /* => Error page
     */
    return (
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<WelcomePage />} />
                <Route path="welcome" element={<WelcomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="contact-me" element={<ContactMePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}

export default App;
