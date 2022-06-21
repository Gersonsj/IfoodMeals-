import axios from "axios";
import { useState } from "react";
import "./Page/Meals.css";
import { Ingredients } from "./Page/GetIngredients";
import { Measures } from "./Page/GetMesure";
import { Footer } from "./Page/Footer";
import { Button } from "./Event/Button";
import { Instructions } from "./Page/Instructions";

export function GetMeal() {
  const [recipes, setRecipes] = useState([]);

  const handleChange = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setRecipes(response.data.meals[0]);
      });
  };

  return (
    <div className="chm_container">
      <header>
        <h1>IFOOD MEAL</h1>
      </header>
      <div className="title">
        <h1>{recipes.strMeal}</h1>
      </div>
      <div className="igredients_container">
        <img src={recipes.strMealThumb} alt={recipes.strMeal} />
        <Ingredients data={recipes} />
        <Measures data={recipes} />
      </div>

      <Instructions data={recipes} />

      <div className=" btn">
        <Button handleChange={handleChange} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
