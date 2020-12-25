import React, { useState, useEffect } from "react";
import Form from "./Form";
import { Todos } from "./Todos";
import "./index.css";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    getTodos();
    
  },[])
  useEffect(()=>{
    saveTodos();
    
  },[todos])


  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  };
  

  return (
    <>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos={setTodos} setData={setData} data={data} />
      <Todos todos={todos} data={data} setTodos={setTodos} />
    </>
  );
};

export default App;
