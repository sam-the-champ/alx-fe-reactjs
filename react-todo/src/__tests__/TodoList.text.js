import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the todo list", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a todo...");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("Test Todo")).toBeInTheDocument();
});

test("toggles a todo as completed", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("❌")[0];

  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});

"scripts": {
  "test": "jest"
}
