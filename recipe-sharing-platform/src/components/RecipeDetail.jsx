import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === Number(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((item, idx) => (
            <li key={idx} className="text-gray-600">{item}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-600">{recipe.instructions}</p>
      </div>
      <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
};

export default RecipeDetail;