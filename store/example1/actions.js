import { LOADING_START, LOADING_SUCCESS, RESET } from './constants';

export const loadStart = () => ({ type: LOADING_START });
export const finishLoad = () => ({ type: LOADING_SUCCESS });

export const loadReset = () => ({ type: RESET });
