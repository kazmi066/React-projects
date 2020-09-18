import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./Todos";

function App() {
  const [inputTodo, setInput] = useState("");
  const [todos, setTodo] = useState([]);

  return (
    <div>
      <h1 className="heading">Todo App</h1>
      <Todos
        todos={todos}
        setTodo={setTodo}
        inputTodo={inputTodo}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
