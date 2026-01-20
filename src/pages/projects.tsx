import Header from "./header";
import "./projects.scss";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <h1>Portfolio</h1>
        <div className="projects-container">
          <section className="featured-projects">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
