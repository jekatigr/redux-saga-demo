import { LOADING_START, LOADING_SUCCESS, RESET } from "./constants";

const States = {
    READY: 'ready',
    LOADING: 'loading',
    DONE: 'done',
};

const initialState = States.READY;

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_START: {
            return States.LOADING;
        }
        case LOADING_SUCCESS: {
            return States.DONE;
        }
        case RESET: {
            return States.READY;
        }
        default: {
            return state;
        }
    }
}
