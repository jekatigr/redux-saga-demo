import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
import rootSaga from './saga';
import delay from './delay';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware({
    context: {
        delay,
    },
    sagaMonitor: {
        effectTriggered: (options) => {
            console.log('effectTriggered', options);
        },
        actionDispatched: (options) => {
            console.log('actionDispatched', options);
        }
    }
});

// mount it on the Store along with redux dev tools
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
