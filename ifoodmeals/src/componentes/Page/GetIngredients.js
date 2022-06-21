import "./Meals.css";
export function Ingredients({ data }) {
  return (
    <ul>
      <li>
        {Object.entries(data)
          .filter(([key]) => key.includes("strIngredient"))
          .flatMap(([id, value]) => (
            <li key={id}>{value}</li>
          ))}
      </li>
    </ul>
  );
}
