import React from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  if (favoriteRecipes.length === 0) {
    return (
      <p style={{ color: "#888", textAlign: "center" }}>No favorites yet.</p>
    );
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>My Favorites</h2>
      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #fbbf24",
            borderRadius: 8,
            margin: "1rem 0",
            padding: "1rem",
            background: "#fffbe6",
          }}
        >
          <h3>
            <Link
              to={`/recipe/${recipe.id}`}
              style={{ color: "#b45309", textDecoration: "underline" }}
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

export default FavoritesList;
