import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import RecipeDetails from "./components/RecipeDetails";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
