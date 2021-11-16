import { LOADING_START, LOADING_SUCCESS, RESET, TRIGGER_LOAD } from "./constants";

export const triggerLoad = (timeout) => ({ type: TRIGGER_LOAD, payload: timeout });

export const loadStart = () => ({ type: LOADING_START });
export const finishLoad = () => ({ type: LOADING_SUCCESS });

export const loadReset = () => ({ type: RESET });
