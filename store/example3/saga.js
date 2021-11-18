import { put, takeLatest, takeLeading, delay } from 'redux-saga/effects'
import { TRIGGER_LATEST, TRIGGER_LEADING } from './constants';
import { leadingStart, leadingStop, latestStart, latestStop } from './actions';

function* leadingSaga({ payload: runId }) {
    yield put(leadingStart());

    yield delay(1000);

    yield put(leadingStop(runId));
}

function* latestSaga({ payload: runId }) {
    yield put(latestStart());

    yield delay(1000);

    yield put(latestStop(runId));
}

function* watcherSaga() {
    yield takeLeading(TRIGGER_LEADING, leadingSaga);
    yield takeLatest(TRIGGER_LATEST, latestSaga);
}

export default watcherSaga;
