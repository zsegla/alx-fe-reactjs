import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: "2rem",
        background: "#f9fafb",
        borderRadius: 12,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <h1
        style={{ textAlign: "center", color: "#2563eb", marginBottom: "2rem" }}
      >
        Recipe Sharing App
      </h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
