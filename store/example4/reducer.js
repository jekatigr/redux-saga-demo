import { SAGA_START, SAGA_FINISH } from './constants';

const initialState = false; // running

export default (state = initialState, action) => {
    switch (action.type) {
        case SAGA_START: {
            return true;
        }
        case SAGA_FINISH: {
            return false;
        }
        default: {
            return state;
        }
    }
}
