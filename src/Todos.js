import React from "react";
import {Todo} from "./Todo"

export const Todos = ({ todos, setTodos }) => {
  
  return (
    <div className="todo-container">
      
        <ul className="todo-list">
            {todos.map(todo=>(
                <Todo className="todo" todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} />

            ))}
        
      </ul>
    </div>
  );
};
