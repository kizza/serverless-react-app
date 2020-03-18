import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import routes from "./components/routes";

export default () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <Nav />
        {routes}
      </Router>
    </header>
  </div>
);
