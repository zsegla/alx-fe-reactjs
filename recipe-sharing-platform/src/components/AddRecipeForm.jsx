import React, { useState } from "react";

const initialState = {
  title: "",
  ingredients: "",
  steps: "",
};

const AddRecipeForm = ({ onAdd }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.title) newErrors.title = "Title is required.";
    if (!form.ingredients) newErrors.ingredients = "Ingredients are required.";
    else {
      const ingredientsArr = form.ingredients
        .split("\n")
        .filter((i) => i.trim());
      if (ingredientsArr.length < 2) {
        newErrors.ingredients = "Please enter at least two ingredients.";
      }
    }
    if (!form.steps) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const ingredientsArr = form.ingredients.split("\n").filter((i) => i.trim());
    onAdd({
      ...form,
      ingredients: ingredientsArr,
    });
    setForm(initialState);
    setErrors({});
  };

  return (
    <form
      className="max-w-lg mx-auto bg-white rounded-lg shadow p-6 mt-8 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.title}
        onChange={handleChange}
      />
      {errors.title && <div className="text-red-500 mb-2">{errors.title}</div>}
      <textarea
        name="ingredients"
        placeholder="Ingredients (one per line)"
        className="border rounded px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.ingredients}
        onChange={handleChange}
      />
      {errors.ingredients && (
        <div className="text-red-500 mb-2">{errors.ingredients}</div>
      )}
      <textarea
        name="steps"
        placeholder="Preparation Steps"
        className="border rounded px-3 py-2 h-24 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={form.steps}
        onChange={handleChange}
      />
      {errors.steps && <div className="text-red-500 mb-2">{errors.steps}</div>}
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
