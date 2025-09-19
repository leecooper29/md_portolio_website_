export function SkillsAnimation() {
  return (
    <div className="dice" role="img" aria-label="Animated 3D dice">
      <div className="dice-cube">
        <div className="face front" aria-label="1">
          <span className="pip c" />
        </div>
        <div className="face back" aria-label="6">
          <span className="pip tl" />
          <span className="pip ml" />
          <span className="pip bl" />
          <span className="pip tr" />
          <span className="pip mr" />
          <span className="pip br" />
        </div>
        <div className="face right" aria-label="3">
          <span className="pip tl" />
          <span className="pip c" />
          <span className="pip br" />
        </div>
        <div className="face left" aria-label="4">
          <span className="pip tl" />
          <span className="pip tr" />
          <span className="pip bl" />
          <span className="pip br" />
        </div>
        <div className="face top" aria-label="2">
          <span className="pip tl" />
          <span className="pip br" />
        </div>
        <div className="face bottom" aria-label="5">
          <span className="pip tl" />
          <span className="pip tr" />
          <span className="pip bl" />
          <span className="pip br" />
          <span className="pip c" />
        </div>
      </div>
    </div>
  );
}


