import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./listActions";

function UpdateToDoBox({ data }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const handleDelete = () => {
    let newList = state.todoList.list.filter((todo) => {
      return todo.id != data.id;
    });
    dispatch(deleteTodo(data.id));
  };

  return (
    <div class="App">
      <div> {data.title} </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default UpdateToDoBox;
