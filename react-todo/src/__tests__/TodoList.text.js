import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders the todo list correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("toggles a todo as completed", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("❌")[0];

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
