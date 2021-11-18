import { RESET, LATEST_START, LEADING_START, LEADING_STOP, LATEST_STOP } from './constants';

const initialState = {
    leading: {
        winnerId: -1,
        running: false,
    },
    latest: {
        winnerId: -1,
        running: false,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LEADING_START: {
            return {
                ...state,
                leading: {
                    winnerId: -1,
                    running: true,
                }
            };
        }
        case LEADING_STOP: {
            return {
                ...state,
                leading: {
                    winnerId: action.payload,
                    running: false,
                }
            };
        }
        case LATEST_START: {
            return {
                ...state,
                latest: {
                    winnerId: -1,
                    running: true,
                }
            };
        }
        case LATEST_STOP: {
            return {
                ...state,
                latest: {
                    winnerId: action.payload,
                    running: false,
                }
            };
        }
        case RESET: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
