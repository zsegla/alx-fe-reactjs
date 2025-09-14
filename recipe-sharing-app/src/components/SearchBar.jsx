import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleChange}
      style={{
        width: "100%",
        padding: "0.5rem 1rem",
        marginBottom: "1.5rem",
        borderRadius: 6,
        border: "1px solid #ccc",
        fontSize: "1rem",
      }}
    />
  );
};

export default SearchBar;
