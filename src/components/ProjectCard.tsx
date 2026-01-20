import type { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-item">
            <p className="title-text">{project.title}</p>
            <p>{project.description}</p>
            {project.stack && <p>{project.stack}</p>}
            {project.placeholder ? (
                <div className="placeholder">
                    <p>Description coming soon</p>
                </div>
            ) : (
                project.image && (
                    <img alt="placeholder text" src={project.image} className="pt" />
                )
            )}
        </div>
    );
}
