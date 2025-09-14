import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ marginRight: "1rem", padding: "0.5rem" }}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{
          marginRight: "1rem",
          padding: "0.5rem",
          verticalAlign: "middle",
        }}
        required
      />
      <button type="submit" style={{ padding: "0.5rem 1rem" }}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
