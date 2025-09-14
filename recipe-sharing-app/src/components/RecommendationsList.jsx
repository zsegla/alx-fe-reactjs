import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => {
    generateRecommendations();
    // eslint-disable-next-line
  }, [
    useRecipeStore((state) => state.favorites),
    useRecipeStore((state) => state.recipes),
  ]);

  if (!recommendations || recommendations.length === 0) {
    return (
      <p style={{ color: "#888", textAlign: "center" }}>
        No recommendations yet.
      </p>
    );
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ color: "#2563eb", marginBottom: "1rem" }}>
        Recommended for You
      </h2>
      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #34d399",
            borderRadius: 8,
            margin: "1rem 0",
            padding: "1rem",
            background: "#ecfdf5",
          }}
        >
          <h3>
            <Link
              to={`/recipe/${recipe.id}`}
              style={{ color: "#059669", textDecoration: "underline" }}
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

export default RecommendationsList;
