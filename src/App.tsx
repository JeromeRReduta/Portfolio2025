import "./shared/design/base.css";
import { Routes, Route } from "react-router";
import BaseLayout from "./shared/components/BaseLayout.tsx";
import AboutMePage from "./about-me/components/AboutMePage.tsx";
import ContactMePage from "./contact-me/components/ContactMePage.tsx";

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
                <Route index element={<AboutMePage />} />
            </Route>

            <Route path="/contact-me" element={<BaseLayout />}>
                <Route index element={<ContactMePage />} />
            </Route>
            {/* <Route path="/projects">
        <Route path=":id" element={} />
      </Route>
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
