import { useMemo, useState } from "react";
import { ProgressList } from "../components/progress-list";
import "./about.scss";
import Header from "./header";
// Background image for skills section (Skateboard)

function AboutPage() {
  const [view, setView] = useState<"languages" | "frameworks">("languages");

  const languagesData = useMemo(
    () => [
      { label: "HTML/CSS/JS", percent: 80, timeUsed: "2 yrs" },
      { label: "TypeScript", percent: 70, timeUsed: "6 months" },
      { label: "SQL", percent: 65, timeUsed: "1 yr" },
      { label: "Python", percent: 60, timeUsed: "1 yr" },
      { label: "Java", percent: 50, timeUsed: "2 mo" },
    ],
    []
  );

  const frameworksData = useMemo(
    () => [
      { label: "React", percent: 75, timeUsed: "1 yr" },
      { label: "Node.js", percent: 65, timeUsed: "6 mo" },
      { label: "Express", percent: 60, timeUsed: "3 mo" },
      { label: "Flask", percent: 40, timeUsed: "3 mo" },
      { label: "Django", percent: 35, timeUsed: "3 mo" },
    ],
    []
  );

  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-me">
          <h3>About me:</h3>
          <article>
            <p>
              I’m a junior Computer Science student with 2+ years of coding
              experience and a strong foundation in front-end development.
              Proficient in React, JavaScript (ES6+), HTML5, and CSS3, I’ve
              built dynamic UIs and single-page applications using modern
              practices like React Hooks. Currently, I’m expanding into back-end
              development by building RESTful APIs with Node.js, Express.js, and
              MongoDB, with the goal of becoming a full-stack developer. I’m
              eager to solve challenging problems, build impactful applications,
              and eventually contribute to large-scale projects in big tech.
            </p>
          </article>
        </div>
        <div className="skills-row">
          <div className="about-me skills-card">
            <h3>Skills</h3>
            <div className="toggle-row">
              <button
                className={view === "languages" ? "btn active" : "btn"}
                onClick={() => setView("languages")}
              >
                Languages
              </button>
              <button
                className={view === "frameworks" ? "btn active" : "btn"}
                onClick={() => setView("frameworks")}
              >
                Frameworks
              </button>
            </div>
            {view === "languages" ? (
              <ProgressList items={languagesData} />
            ) : (
              <ProgressList items={frameworksData} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
