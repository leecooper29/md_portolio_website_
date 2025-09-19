import image1 from "../assets/Screenshot 2025-08-17 at 3.46.00 PM.png";
import image2 from "../assets/Screenshot 2025-08-17 at 3.50.20 PM.png";
import image3 from "../assets/Screenshot 2025-08-17 at 5.59.35 PM.png";
import Header from "./header";
import "./projects.scss";

function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="projects-page">
        <h1>Portfolio</h1>
        <div className="projects-container">
          <section className="featured-projects">
            <div className="project-item">
              <p className="title-text">Simple Portfolio Website</p>
              <p>
                simple yet professional portfolio site (content subject to
                change)
              </p>
              <p>Vite + React</p>
              <img alt="placeholder text" src={image3} className="pt"></img>
            </div>
            <div className="project-item">
              <p className="title-text">Ecommerce Course Shop</p>
              <p>
                ecommerce store that provides courses that teach about the
                skills you wont learn in college
              </p>
              <p>Vite + React</p>
              <div className="placeholder">
                <p>Description coming soon</p>
              </div>
              {/* <img alt="placeholder text" src={image4} className="pt"></img> */}
            </div>
            <div className="project-item">
              <p className="title-text">Multi Step Form</p>
              <p>advanced challenge in html, css, and javascript</p>
              <img alt="placeholder text" src={image1} className="pt"></img>
            </div>
            <div className="project-item">
              <p className="title-text">Ecommerce Product Page</p>
              <p>intermediate challenge in html, css, and javascript</p>
              <img alt="placeholder text" src={image2} className="pt"></img>
            </div>
            <div className="project-item">
              <p className="title-text">project title</p>
              <p>Description coming soon</p>
              <div className="placeholder">
                <p>Description coming soon</p>
              </div>
              {/* <img alt="placeholder text" src={image2} className="pt"></img> */}
            </div>
            <div className="project-item">
              <p className="title-text">project title</p>
              <p>Description coming soon</p>
              <div className="placeholder">
                <p>Description coming soon</p>
              </div>
              {/* <img alt="placeholder text" src={image2} className="pt"></img> */}
            </div>
            <div className="project-item">
              <p className="title-text">project title</p>
              <p>Description coming soon</p>
              <div className="placeholder">
                <p>Description coming soon</p>
              </div>
              {/* <img alt="placeholder text" src={image2} className="pt"></img> */}
            </div>
            <div className="project-item">
              <p className="title-text">project title</p>
              <p>Description coming soon</p>
              <div className="placeholder">
                <p>Description coming soon</p>
              </div>
              {/* <img alt="placeholder text" src={image2} className="pt"></img> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
