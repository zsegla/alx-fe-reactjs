import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
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
