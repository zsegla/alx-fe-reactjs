import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

describe('TodoItem', () => {
  const mockTodo = { id: 1, text: 'Test Todo', completed: false };
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
  });

  test('renders todo text', () => {
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('calls toggleTodo when clicked', () => {
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test('calls deleteTodo when delete button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test('displays completed todo correctly', () => {
    const completedTodo = { ...mockTodo, completed: true };
    render(
      <TodoItem
        todo={completedTodo}
        toggleTodo={mockToggleTodo}
        deleteTodo={mockDeleteTodo}
      />
    );
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});