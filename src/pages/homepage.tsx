import { EducationSection } from "../components/education-section";
import { ExperienceSection } from "../components/experience-section";
import { HeroSection } from "../components/hero-section";
import "./homepage.scss";
// import { SkillsList } from "../components/skills-list";
import Header from "./header";

function HomePage() {
  const education = [
    {
      degree: "Bachelor of Science",
      institution: "Uconn Stamford",
      field: "Computer Science",
      graduationDate: "Spring 2027",
    },
    {
      degree: "Associate of Science",
      institution: "Norwalk Community College",
      field: "Software Development",
      graduationDate: "May 2025",
      honors: "Honors student with a 3.35 gpa",
    },
  ];
  return (
    <>
      <Header />
      <section className="sec-1">
        <div className="main-grid">
          <div className="item">
            <HeroSection title="Hi I'm Lee Cooper, software engineer." />
            <ExperienceSection
              experiences={[
                {
                  company: "Landscape Company",
                  period: "2023 - 2024",
                  description:
                    // bullet point
                    "Worked as a landscape designer with knowledge in airating, mowing, triming, and plant care. I also had to make sure that the clients needs satisfied base on the work that was done.",
                },
                {
                  company: "Landscape Company",
                  period: "2021 - 2022",
                  description:
                    // bullet point
                    "Working for an electric lawn care business involves operating quiet, battery-powered equipment to maintain clients' yards. The job is physically active and often takes place outdoors, providing a greener and more peaceful alternative to traditional gas-powered landscaping.",
                },
              ]}
            />
          </div>
          <EducationSection education={education} />
        </div>
        {/* <div id="skills" className="skills">
          <SkillsList skills={skills} />
        </div> */}
      </section>
    </>
  );
}

export default HomePage;
