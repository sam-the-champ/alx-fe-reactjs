import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the Todo List with initial items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Project")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText("Add a new task");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test New Todo" } });
  fireEvent.click(button);

  expect(screen.getByText("Test New Todo")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText("Delete")[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
