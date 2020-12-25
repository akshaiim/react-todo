import React, { useState } from "react";
import Form from "./Form";
import { Todos } from "./Todos";
import "./index.css";

const App = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
 
  return (
    <>
      <h1>Todo App</h1>
      <Form todos={todos} setTodos={setTodos} setData={setData} data={data} />
      <Todos  todos={todos} data={data} setTodos={setTodos} />
    </>
  );
};

export default App;
