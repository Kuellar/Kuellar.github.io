import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes } from "./components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
