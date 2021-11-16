import { TRIGGER_SAGA, SAGA_START, SAGA_FINISH } from "./constants";

export const triggerSaga = () => ({ type: TRIGGER_SAGA });

export const startSaga = () => ({ type: SAGA_START });
export const finishSaga = () => ({ type: SAGA_FINISH });
