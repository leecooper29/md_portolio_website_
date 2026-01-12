import { useMemo, useState } from "react";
import { ProgressList } from "../components/progress-list";
import "./about.scss";
import Header from "./header";

function AboutPage() {
  const [view, setView] = useState<"languages" | "frameworks">("languages");

  const languagesData = useMemo(
    () => [
      { label: "HTML/CSS/JS", percent: 80, timeUsed: "2 yrs" },
      { label: "Python", percent: 60, timeUsed: "1 yr" },
      { label: "Java", percent: 50, timeUsed: "2 mo" },
      { label: "SQL", percent: 65, timeUsed: "1 yr" },
      { label: "C++", percent: 70, timeUsed: "6 months" },
    ],
    []
  );

  const frameworksData = useMemo(
    () => [
      { label: "React", percent: 75, timeUsed: "1 yr" },
      { label: "Angular", percent: 20, timeUsed: "6 mo" },
      { label: "Node.js", percent: 65, timeUsed: "6 mo" },
      { label: "Flask", percent: 40, timeUsed: "3 mo" },
      { label: "Django", percent: 35, timeUsed: "3 mo" },
    ],
    []
  );

  // const operatingSystem = useMemo(
  //   () => [
  //     {}
  //   ]
  // )

  // const interests = useMemo(
  //   () => [
  //     {
  //       interest: "Skateboarding",
  //       description:
  //         "Focusing on transition skating and learning new tricks like kickflips.",
  //     },
  //     {
  //       interest: "Photography",
  //       description: "Street photography and capturing dynamic action shots.",
  //     },
  //     {
  //       interest: "Reading",
  //       description:
  //         "I like to read in my free time at the library when I'm not in classes.",
  //     },
  //     {
  //       interest: "Golfing",
  //       description: "Enjoy a game of golf on the weekends after work.",
  //     },
  //   ],
  //   []
  // );

  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-grid">
        <div className="about-me">
          <div className="">
          {/* <img alt="profile-image"/> */}
          <h3>About Me:</h3>
          <hr></hr>
          </div>
          <article>
            <p className="about-me-paragraph">
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
          <div></div>
        </div>
        <div className="">
          {/* Skills Section */}
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
          {/* Interests Section (Simplified) */}
          {/* <div className="about-me interests-card">
            <h5>Diciplinary Interests</h5>
            <ul className="interest-list">
              {interests.map((item, index) => (
                <li key={index}>
                  <strong>{item.interest}</strong>: {item.description}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
