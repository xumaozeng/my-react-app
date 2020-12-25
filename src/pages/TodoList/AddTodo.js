import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

function AddTodo(props) {
  const { addTodo } = props;
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };
  return (
    <div>
      <input value={input} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);
