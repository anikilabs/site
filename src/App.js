import React from "react";
import "./App.css";
import Logo from "./components/Logo";

function App() {
  document.title = "Aniki Labs // 2022";
  return (
    <div className="container">
      <Logo />
      <p className="elevated flex-left">Aniki Labs // 2022</p>
    </div>
  );
}

export default App;
