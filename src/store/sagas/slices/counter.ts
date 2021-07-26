import { put, takeLatest } from "redux-saga/effects";
import { increase, increaseAsync } from "../../slices/counter";
import { delay } from "../../../utils";

function* incrementAsync() {
  yield delay(1000);
  yield put(increase());
}

export function* watchIncrementAsync() {
  yield takeLatest(increaseAsync.type, incrementAsync);
}
