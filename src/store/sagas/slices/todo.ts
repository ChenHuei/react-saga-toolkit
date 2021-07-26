import { put, takeLatest } from "redux-saga/effects";
import { addTodo, getTodo } from "../../slices/todo";
import { delay } from "../../../utils";

export function* getTodoAPI() {
  yield delay(500);
  yield put(
    addTodo([
      {
        title: "1",
        done: false,
      },
      {
        title: "2",
        done: true,
      },
    ])
  );
}

export function* watchGetTodo() {
  yield takeLatest(getTodo.type, getTodoAPI);
}
