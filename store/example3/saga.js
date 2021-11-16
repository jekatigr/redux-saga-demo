import { call, put, takeLatest, takeLeading, delay } from 'redux-saga/effects'
import { TRIGGER_LATEST, TRIGGER_LEADING } from "./constants";
import { leadingStart, leadingStop, latestStart, latestStop } from "./actions";

function* leadingSaga({ payload: runId }) {
    console.log('in leading saga');

    yield put(leadingStart());

    yield delay(1000);

    yield put(leadingStop(runId));
}

function* latestSaga({ payload: runId }) {
    console.log('in latest saga');

    yield put(latestStart());

    yield delay(1000);

    yield put(latestStop(runId));
}

function* watcherSaga() {
    yield takeLeading(TRIGGER_LEADING, leadingSaga);
    yield takeLatest(TRIGGER_LATEST, latestSaga);
}

export default watcherSaga;
