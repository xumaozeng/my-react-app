import { put, takeEvery, delay, all } from "redux-saga/effects";

/**
 * redux-saga是一个用于管理应用程序的副作用的库，类比redux-thunk
 * 监听 takeEvery
 * 调用异步操作 call
 * 状态更新 (dispatch) put
 */

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
