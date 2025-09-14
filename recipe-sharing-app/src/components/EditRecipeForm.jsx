import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem" }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          marginRight: "1rem",
          padding: "0.5rem",
          verticalAlign: "middle",
        }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>
        Update
      </button>
    </form>
  );
};

export default EditRecipeForm;
