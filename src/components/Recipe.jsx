import { useState, useEffect } from "react";
import "./Recipe.css";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const apiKeyO2 = "08177436caba4cdd8794441ed4da0ef1";
    const apiKeyM2 = "96a4012a907a426391db8efdb8849261";

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=${apiKeyM2}`
        );
        const data = await response.json();
        // console.log(data);
        setRecipe(data);
        setIsDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // testing:

  recipe.vegetarian = true;
  recipe.vegan = true;
  recipe.glutenFree = true;

  console.log(recipe);
  return (
    <main className="Recipe">
      {isDataLoaded ? (
        <>
          <section className="recipe-head">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="" />
            <div className="tags-wrapper">
              <ul>
                {recipe.vegetarian ? (
                  <li>{recipe.vegan ? "vegan" : "vegetarian"}</li>
                ) : null}
                {recipe.glutenFree ? <li>gluten free</li> : null}
              </ul>
            </div>
          </section>
          <section className="recipe-content">
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p>{recipe.winePairing.pairingText}</p>
          </section>
          <section className="ingredients"></section>
        </>
      ) : (
        "Daten laden"
      )}
    </main>
  );
};

export default Recipe;