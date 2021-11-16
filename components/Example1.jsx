import { useDispatch, useSelector } from "react-redux";
import { loadReset } from "../store/example1/actions";
import {TRIGGER_LOAD} from "../store/example1/constants";

function Example1() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.example1);

    const handleStartClick = () => {
        dispatch({ type: TRIGGER_LOAD, payload: 1000 });
    }

    const handleResetClick = () => {
        dispatch(loadReset());
    }

    return (
        <div className="example">
            <p className="example__description">Basic example with loading states.</p>
            <p>State: {state}</p>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    );
}

export default Example1;
