import { put, takeLatest } from "redux-saga/effects";
import { setTodo, getTodo } from "../../store/slices/todo";
import { delay } from "../../utils";

function* getTodoAPI() {
  yield delay(500);
  yield put(
    setTodo([
      {
        id: 1,
        title: "title 1",
        done: false,
      },
      {
        id: 2,
        title: "title 2",
        done: true,
      },
    ])
  );
}

export function* watchGetTodo() {
  yield takeLatest(getTodo.type, getTodoAPI);
}
