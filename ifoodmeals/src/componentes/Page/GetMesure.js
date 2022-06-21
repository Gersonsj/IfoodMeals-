import "./Meals.css";
export function Measures({ data }) {
  return (
    <ul>
      <li>
        {Object.entries(data)
          .filter(([key]) => key.includes("strMeasure"))
          .flatMap(([id, value]) => (
            <li key={id}>{value}</li>
          ))}
      </li>
    </ul>
  );
}
