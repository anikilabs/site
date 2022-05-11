import React from "react";
import "./App.css";
import Button from "./components/Button";
import Logo from "./components/Logo";

function App() {
  document.title = "Aniki Labs // 2022";

  return (
    <div className="container">
      <Logo />
      <Button href="https://twitter.com/AnikiLabs" title="Aniki Labs // 2022" />
    </div>
  );
}

export default App;
