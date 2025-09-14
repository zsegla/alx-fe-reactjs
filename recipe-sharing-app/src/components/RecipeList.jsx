import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p style={{ color: "#888", textAlign: "center" }}>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              margin: "1rem 0",
              padding: "1rem",
            }}
          >
            <h3>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{ color: "#2563eb", textDecoration: "underline" }}
              >
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
