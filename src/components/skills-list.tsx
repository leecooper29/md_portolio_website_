interface SkillsListProps {
  skills: string[];
  title?: string;
}

export function SkillsList({
  skills,
  title = "Programming Languages",
}: SkillsListProps) {
  return (
    <div className="item-1">
      <h2>{title}</h2>
      <nav className="skills-list">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}> * {skill}</li>
          ))}
        </ul>
      </nav>
      {/* comment here */}
    </div>
  );
}
