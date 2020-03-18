import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Route>
            <Route path="/about">
              <p>About page</p>
            </Route>
            <Route path="/faq">
              <p>FAQ page</p>
            </Route>
          </Switch>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>

        </Router>
      </header>
    </div>
  );
}

export default App;
