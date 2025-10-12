import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders the TodoList component', () => {
    const heading = screen.getByText(/todo list/i);
    expect(heading).toBeInTheDocument();
  });

  test('allows users to add a todo', () => {
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('allows users to toggle a todo', () => {
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Toggle Todo' } });
    fireEvent.click(button);

    const toggleButton = screen.getByRole('checkbox');
    fireEvent.click(toggleButton);

    const toggledTodo = screen.getByText('Toggle Todo');
    expect(toggledTodo).toHaveStyle('text-decoration: line-through');
  });

  test('allows users to delete a todo', () => {
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByRole('button', { name: /add/i });

    fireEvent.change(input, { target: { value: 'Delete Todo' } });
    fireEvent.click(button);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    const deletedTodo = screen.queryByText('Delete Todo');
    expect(deletedTodo).not.toBeInTheDocument();
  });
});