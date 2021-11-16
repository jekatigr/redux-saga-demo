import { all, call } from 'redux-saga/effects'
import watcherSaga1 from "./example1/saga";
import watcherSaga2 from "./example2/saga";
import watcherSaga3 from "./example3/saga";
import watcherSaga4 from "./example4/saga";

function* rootSaga() {
    // run all watchers
    yield all([
        call(watcherSaga1),
        call(watcherSaga2),
        call(watcherSaga3),
        call(watcherSaga4),
    ]);
}

export default rootSaga;
