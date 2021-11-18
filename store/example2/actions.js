import { LOADING_START, LOADING_SUCCESS, RESET, TRIGGER_LOAD } from './constants';

export const triggerLoad = () => ({ type: TRIGGER_LOAD });

export const loadStart = () => ({ type: LOADING_START });
export const finishLoad = () => ({ type: LOADING_SUCCESS });

export const loadReset = () => ({ type: RESET });
