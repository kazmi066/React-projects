import React from "react";

export default function TodoItem({
  todo,
  text,
  setTodo,
  todos,
  saveLocalStorage,
}) {
  function deleteTodo(e) {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    todoLocal.splice(todos.indexOf(todo), 1);
    localStorage.setItem("todos", JSON.stringify(todoLocal));

    setTodo(
      todos.filter((el) => {
        return el.id !== todo.id;
      })
    );
  }

  function completeTodo(e) {
    setTodo(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  }

  return (
    <div className="todoItem">
      <li
        onClick={() => {
          completeTodo();
          saveLocalStorage();
        }}
        className={`${todo.completed ? "complete" : ""} item`}
      >
        {text}
      </li>
      <i onClick={deleteTodo} className="fas fa-trash"></i>
    </div>
  );
}
