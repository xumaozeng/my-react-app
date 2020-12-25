import React from "react";
import PropTypes from "prop-types";

function Todo(props) {
  const { onClick, completed, text } = props;
  return (
    <li
      onClick={onClick}
      style={{
        backgroundColor: completed ? "#ddd" : ""
      }}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
