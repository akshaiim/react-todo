import React from "react";

const Form = ({ data, setData, setTodos, todos }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (todos === "") return;
    setTodos([...todos, { id: Math.floor(Math.random()*3000), text: data, completed: false }]);

    setData("");
    
  };
  return (
    <form>
      <input
        onChange={handleChange}
        className="form input"
        type="text"
        className="form-input"
        value={data}
        placeholder="Enter a Todo"
      />
      <button className="form button" onClick={handleClick} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
