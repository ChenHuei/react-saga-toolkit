import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// slices
import todoReducer from "./slices/todo";
import counterReducer from "./slices/counter";

// sagas
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const reducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
