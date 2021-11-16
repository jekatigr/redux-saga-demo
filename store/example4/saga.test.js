import { getContext } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import watcherSaga from './saga';
import { SAGA_START, SAGA_FINISH, TRIGGER_SAGA } from './constants';

it('test watcher saga', () => {
    const mockDelay = jest.fn();

    return expectSaga(watcherSaga)
        .provide([[getContext('delay'), mockDelay]])
        .put({ type: SAGA_START })
        .put({ type: SAGA_FINISH })
        .dispatch({ type: TRIGGER_SAGA })
        .run(100).then(() => {
            expect(mockDelay).toHaveBeenCalledWith(1000);
        });
});

