import React from "react";
import PropTypes from "prop-types";
import "./Todo.css";

const Todo = ({ onClick, completed, text }) => (
  <div className="todo_container">
    <li
      onClick={onClick}
      className="todo_li"
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <div className="todo_text">
        {text}
      </div>
      
    </li>
  </div>
);

Todo.protoTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
