import React, { useState } from "react";

const initialState = {
  title: "",
  ingredients: "",
  steps: "",
};

const AddRecipeForm = ({ onAdd }) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.ingredients || !form.steps) {
      setError("All fields are required.");
      return;
    }
    const ingredientsArr = form.ingredients.split("\n").filter((i) => i.trim());
    if (ingredientsArr.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }
    onAdd({
      ...form,
      ingredients: ingredientsArr,
    });
    setForm(initialState);
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white rounded-lg shadow p-6 mt-8 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients (one per line)"
        className="border rounded px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.ingredients}
        onChange={handleChange}
      />
      <textarea
        name="steps"
        placeholder="Preparation Steps"
        className="border rounded px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.steps}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
