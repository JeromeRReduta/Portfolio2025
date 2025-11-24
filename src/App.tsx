import "./shared/design/base.css";
import { Routes, Route } from "react-router";
import BaseLayout from "./shared/components/BaseLayout.tsx";
import WelcomePage from "./welcome/components/WelcomePage.tsx";
import ContactMePage from "./contact-me/components/ContactMePage.tsx";
import ProjectsPage from "./projects/components/ProjectsPage.tsx";

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
            </Route>
            <Route path="/projects">
                <Route path=":id" element={<ProjectsPage />} />
            </Route>

            <Route path="/contact-me" element={<BaseLayout />}>
                <Route index element={<ContactMePage />} />
            </Route>
            {/* 
      <Route path="/contact-me">
        <Route index element={} />
      </Route>
      <Route path="*">
        <Route index element={} />
      </Route> */}
        </Routes>
    );
}

export default App;
