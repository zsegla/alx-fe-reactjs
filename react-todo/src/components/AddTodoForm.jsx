import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  function submit(e) {
    e.preventDefault();
    onAdd(value);
    setValue("");
  }

  return (
    <form onSubmit={submit} style={{ marginBottom: 12 }}>
      <input
        aria-label="new-todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add todo"
      />
      <button
        aria-label="add-todo-button"
        type="submit"
        style={{ marginLeft: 8 }}
      >
        Add
      </button>
    </form>
  );
}
