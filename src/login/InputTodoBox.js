import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./listActions";
import { v4 as uuidv4 } from "uuid";

function InputTodoBox() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    let newTodo = {
      id: uuidv4(),
      title: text,
    };

    dispatch(addTodo(newTodo));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}> ADD </button>
    </div>
  );
}

export default InputTodoBox;
