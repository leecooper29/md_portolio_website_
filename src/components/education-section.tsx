import { GithubSection } from "./github-section";

interface Education {
  degree: string;
  institution: string;
  field?: string;
  graduationDate?: string;
  honors?: string;
}

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <div>
      <div className="edu item">
        <h2>Education:</h2>
        {education.map((edu, index) => (
          <div key={index} className="bt">
            <p className="bl">
              {edu.degree} | {edu.institution}
            </p>
            {edu.field && (
              <p>
                * {edu.field} | {edu.graduationDate}
              </p>
            )}
            {edu.honors && <p>{edu.honors}</p>}
          </div>
        ))}
      </div>
      <GithubSection
        username="leecooper29"
        contributions="50+ contributions in 2025"
      />
    </div>
  );
}
