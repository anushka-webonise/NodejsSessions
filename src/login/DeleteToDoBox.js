import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./listActions";

function DeleteToDoBox({ data }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const onDelete = () => {
    let newList = state.todoList.list.filter((todo) => {
      return todo.id != data.id;
    });
    dispatch(deleteTodo(data.id));
  };

  return (
    <div class="app">
      <div>{data.title}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default DeleteToDoBox;
