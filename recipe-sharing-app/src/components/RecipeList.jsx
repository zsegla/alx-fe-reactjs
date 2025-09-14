import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p style={{ color: "#888", textAlign: "center" }}>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => {
          const isFavorite = favorites.includes(recipe.id);
          return (
            <div
              key={recipe.id}
              style={{
                border: isFavorite ? "2px solid #fbbf24" : "1px solid #ccc",
                borderRadius: 8,
                margin: "1rem 0",
                padding: "1rem",
                background: isFavorite ? "#fffbe6" : "#fff",
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
              <button
                onClick={() =>
                  isFavorite
                    ? removeFavorite(recipe.id)
                    : addFavorite(recipe.id)
                }
                style={{
                  background: isFavorite ? "#fbbf24" : "#e5e7eb",
                  color: isFavorite ? "#b45309" : "#374151",
                  border: "none",
                  borderRadius: 4,
                  padding: "0.3rem 0.8rem",
                  cursor: "pointer",
                  marginTop: "0.5rem",
                  fontWeight: 500,
                }}
                aria-label={
                  isFavorite ? "Remove from favorites" : "Add to favorites"
                }
              >
                {isFavorite ? "★ Favorited" : "☆ Favorite"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RecipeList;
