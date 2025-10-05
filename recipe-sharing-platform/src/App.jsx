import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then(setRecipes);
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([
      ...recipes,
      {
        ...newRecipe,
        id: recipes.length + 1,
        image: "https://via.placeholder.com/150",
        summary: newRecipe.instructions.slice(0, 60) + "...",
      },
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm onAdd={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;