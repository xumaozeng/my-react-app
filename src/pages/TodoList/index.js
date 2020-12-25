import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

const TodoListPage = () => {
  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
};
export default TodoListPage;
