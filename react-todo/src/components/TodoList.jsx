import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false }
  ]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add a todo..." data-testid="todo-input" />
      <button onClick={() => handleAddTodo("Test Todo")} data-testid="add-btn">
        Add
      </button>
    </div>
  );
};

export default TodoList;
