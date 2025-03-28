import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";  // Adjust import path if necessary

describe("TodoList Component", () => {
  test("renders initial todo items", () => {
    render(<TodoList />);
    
    // Ensure initial todos are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    // Find input and button elements
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    // Add new todo
    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);

    // Expect new todo to be added
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);

    // Check if class for completed todo is added
    expect(todoItem).toHaveClass("completed");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = screen.getByTestId("delete-btn-1"); // Ensure delete buttons have unique `data-testid`

    fireEvent.click(deleteButton);

    // Ensure the todo is removed
    expect(todoItem).not.toBeInTheDocument();
  });
});
