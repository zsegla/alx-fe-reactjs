import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors duration-300">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="mt-auto text-blue-600 hover:underline font-medium"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;