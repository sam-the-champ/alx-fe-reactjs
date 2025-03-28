import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Adjust path if needed

describe("TodoList Component", () => {
  test("renders initial todo items", () => {
    render(React.createElement(TodoList)); // Avoid JSX
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(React.createElement(TodoList));
    const input = screen.getByPlaceholderText("Add a new task...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(React.createElement(TodoList));
    const todo = screen.getByText(/Learn React/i);
    
    fireEvent.click(todo);
    
    expect(todo).toHaveClass("completed"); // Ensure toggled
  });

  test("deletes a todo", () => {
    render(React.createElement(TodoList));
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
