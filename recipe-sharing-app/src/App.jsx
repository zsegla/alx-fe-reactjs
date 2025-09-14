import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
                style={{
                  textAlign: "center",
                  color: "#2563eb",
                  marginBottom: "2rem",
                }}
              >
                Recipe Sharing App
              </h1>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </div>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
