import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import Todo from "./components/todo.component";

function App() {
  return (
      <Router>
          <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="/">
                      <img src={logo} width="30" height="30" alt="ReactJS Logo" />
                  </a>
                  <Link to="/" className="navbar-brand">ReactJS Todo App</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Todos</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/create" className="nav-link">Create Todo</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br />

              <Route path="/" exact component={Todo} />
              <Route path="/edit/:id" component={EditTodo} />
              <Route path="/create" component={CreateTodo} />
          </div>
      </Router>
  );
}

export default App;
