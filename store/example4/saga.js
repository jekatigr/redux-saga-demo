import { put, takeLatest, getContext, call } from 'redux-saga/effects'
import { TRIGGER_SAGA } from "./constants";
import { startSaga, finishSaga } from "./actions";

function* saga() {
    const delay = yield getContext('delay');

    yield put(startSaga());

    yield call(delay, 1000);

    yield put(finishSaga());
}

function* watcherSaga() {
    yield takeLatest(TRIGGER_SAGA, saga);
}

export default watcherSaga;

