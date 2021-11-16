import { put, takeLatest, delay } from 'redux-saga/effects'
import { TRIGGER_LOAD } from "./constants";
import { finishLoad, loadStart } from "./actions";

function* loadingSaga({ payload: timeout }) {
    yield put(loadStart());

    yield delay(timeout);

    yield put(finishLoad());
}

function* watcherSaga1() {
    yield takeLatest(TRIGGER_LOAD, loadingSaga);
}

export default watcherSaga1;

