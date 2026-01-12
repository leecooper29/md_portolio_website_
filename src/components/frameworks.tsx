// import etc...

function frameworks({ frameworks }: { frameworks: string[] }) {
  return (
    <div className="frameworks">
      <h2>Frameworks/Technologies</h2>
      <ul>
        {frameworks.map((framework) => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </div>
  );
}
export default frameworks;
