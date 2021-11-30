import { combineReducers } from "redux";
import listReducer from "./listReducer";

const allReducers = combineReducers({
  todoList: listReducer,
});

export default allReducers;
