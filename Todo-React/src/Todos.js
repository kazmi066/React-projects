import React, { useEffect } from "react";
import Todo from "./Todo";

function Todos({ todos, setTodo, inputTodo, setInput }) {
  // Get from LocalStorage
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  function addTodo(e) {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: inputTodo, completed: false, id: Math.random() * 23 },
    ]);
    setInput("");
    saveToLocalStorage();
  }

  function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getFromLocalStorage() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodo(todoLocal);
  }

  function getInput(e) {
    return setInput(e.target.value);
  }

  return (
    <div>
      <form onSubmit={addTodo} className="inputForm">
        <input
          type="text"
          id="todoInput"
          className="todoInput"
          value={inputTodo}
          placeholder="Enter something"
          autoComplete="off"
          onChange={getInput}
        />
      </form>
      <Todo
        todos={todos}
        setTodo={setTodo}
        saveLocalStorage={saveToLocalStorage}
      />
    </div>
  );
}

export default Todos;
