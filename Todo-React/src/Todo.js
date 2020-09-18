import React from "react";
import TodoItem from "./TodoItem";

export default function Todo({ todos, setTodo, saveLocalStorage }) {
  return (
    <div className="todoList">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            text={todo.text}
            key={todo.id}
            setTodo={setTodo}
            todos={todos}
            saveLocalStorage={saveLocalStorage}
          />
        ))}
      </ul>
    </div>
  );
}
