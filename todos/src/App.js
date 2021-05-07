import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Check from './svg/check.png';
import Home from './svg/home.png';
import Form from './svg/todo-form.png';

const App = () => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <ul>
          <li><img src={Check} alt="" className="check-img" /></li>
            <li><img src={Home} alt="" className="home-img" /></li>
            <li><img src={Form} alt="" className="form-img" /></li>
        </ul>
      </nav>

      <div className="App">
        <TodoForm />
      </div>
    </div>
  );
};

export default App;