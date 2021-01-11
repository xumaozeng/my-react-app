import { put, takeEvery, delay, all } from "redux-saga/effects";

function* helloSaga() {
  const result = yield "Hello, Sagas!";
  console.log(result);
}

// 异步action
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "ADD" });
}

function* watchIncrementAsync() {
  yield takeEvery("ADD_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), helloSaga()]);
}
