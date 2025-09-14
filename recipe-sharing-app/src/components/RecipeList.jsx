import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
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
      ))}
    </div>
  );
};

export default RecipeList;
