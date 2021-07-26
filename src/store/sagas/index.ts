import { all } from "redux-saga/effects";
import { watchIncrementAsync } from "./slices/counter";

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
