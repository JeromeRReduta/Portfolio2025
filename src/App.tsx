import "./shared/design/base.css";
import { Routes, Route } from "react-router";
import PortfolioPage from "./portfolio-page/components/PortfolioPage.tsx";
import BaseLayout from "./shared/components/BaseLayout.tsx";

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
                <Route index element={<PortfolioPage />} />
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
