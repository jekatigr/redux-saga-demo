import { call, put, race, take, takeLatest, delay } from 'redux-saga/effects'
import { TRIGGER_LOAD, RESET } from "./constants";
import { finishLoad, loadStart } from "./actions";

function* loadingSaga() {
    yield put(loadStart());

    yield delay(1000);

    yield put(finishLoad());
}

function* watcherSaga() {
    const stopOnReset = function* () {
        yield race([call(loadingSaga), take(RESET)]);
    }

    yield takeLatest(TRIGGER_LOAD, stopOnReset);
}

export default watcherSaga;
