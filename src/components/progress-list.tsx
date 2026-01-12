interface ProgressItem {
  label: string;
  percent: number; // 0-100
  timeUsed: string; // e.g., "2 yrs" or "120 hrs"
}

interface ProgressListProps {
  title?: string;
  items: ProgressItem[];
}

export function ProgressList({ title, items }: ProgressListProps) {
  return (
    <div className="progress-list">
      {title ? <h2>{title}</h2> : null}
      <ul>
        {items.map((item) => (
          <li className="progress-item" key={item.label}>
            <div className="progress-meta">
              <span className="progress-label">{item.label}</span>
              <span className="progress-time">{item.timeUsed}</span>
            </div>
            <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={item.percent} aria-label={`${item.label} proficiency`}>
              <div className="progress-fill" style={{ width: `${item.percent}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


