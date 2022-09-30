import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <Weather />
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
