import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// styles handled via styles/main.scss
import AboutPage from "./pages/about";
import CollaborationPage from "./pages/collaboration";
import HomePage from "./pages/homepage";
import ProjectsPage from "./pages/projects";
// using tailwind for styling (will implement later)
// updated

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
