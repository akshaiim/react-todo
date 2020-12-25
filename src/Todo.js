import React from "react";

export const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeTask = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="todo">
      <li className="todo-item" className={todo.completed ? "completed" : undefined}>{text}</li>
      <button
        
        className="complete-btn"
        onClick={completeTask}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteTodo}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
