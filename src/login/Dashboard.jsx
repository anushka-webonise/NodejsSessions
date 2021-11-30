import React, { useState } from "react";
import InputTodoBox from "./InputTodoBox";
import DeleteToDoBox from "./DeleteToDoBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./listActions";

function Dashboard() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <InputTodoBox />
      {state.todoList.list.map((todo) => {
        return <DeleteToDoBox key={todo.id} data={todo} />;
      })}
    </div>
  );
}
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

export default Dashboard;
