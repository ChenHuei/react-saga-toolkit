import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./slices/counter";
import { watchGetTodo } from "./slices/todo";

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchGetTodo()]);
}
