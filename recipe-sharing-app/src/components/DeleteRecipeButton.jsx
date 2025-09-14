import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      onClick={() => deleteRecipe(recipeId)}
      style={{
        marginTop: "1rem",
        background: "#ef4444",
        color: "#fff",
        border: "none",
        borderRadius: 4,
        padding: "0.5rem 1rem",
        cursor: "pointer",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
