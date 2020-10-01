import React, { useContext } from "react";
import "./App.css";
import { Header, Movies } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
