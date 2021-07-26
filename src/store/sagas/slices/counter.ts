import { put, takeLatest } from "redux-saga/effects";
import { increase, increaseAsync } from "../../slices/counter";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put(increase());
}

export function* watchIncrementAsync() {
  yield takeLatest(increaseAsync.type, incrementAsync);
}
