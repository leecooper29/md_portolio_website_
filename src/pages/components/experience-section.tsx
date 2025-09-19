interface Experience {
  company: string;
  period: string;
  description: string; // added field
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

import "./homepage.css";

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div id="experience" className="experience">
      <h2>Employment Experience:</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>
            {exp.company} | {exp.period}
          </h3>
          <p>* {exp.description}</p>
        </div>
      ))}
    </div>
  );
}
