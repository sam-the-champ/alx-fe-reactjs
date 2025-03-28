import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import { fireEvent } from "@testing-library/react";

test("renders the TodoList component correctly", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a project")).toBeInTheDocument();
});


test("adds a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText("Add a todo...");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo item between completed and not completed", () => {
  render(<TodoList />);
  
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("deletes a todo item", () => {
  render(<TodoList />);
  
  const deleteButton = screen.getAllByText("❌")[0];
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
