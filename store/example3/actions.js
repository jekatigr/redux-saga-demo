import { TRIGGER_LATEST, TRIGGER_LEADING, RESET, LEADING_START, LATEST_STOP, LATEST_START, LEADING_STOP } from "./constants";

export const triggerLeading = (runId) => ({ type: TRIGGER_LEADING, payload: runId });
export const leadingStart = () => ({ type: LEADING_START });
export const leadingStop = (runId) => ({ type: LEADING_STOP, payload: runId });

export const triggerLatest = (runId) => ({ type: TRIGGER_LATEST, payload: runId });
export const latestStart = () => ({ type: LATEST_START });
export const latestStop = (runId) => ({ type: LATEST_STOP, payload: runId });

export const reset = () => ({ type: RESET });
