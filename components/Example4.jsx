import { useDispatch, useSelector } from "react-redux";
import { triggerSaga } from "../store/example4/actions";

function Example4() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.example4);

    const handleStartClick = () => {
        dispatch(triggerSaga());
    }

    return (
        <div className="example">
            <p className="example__description">Context example. Delay function injected in saga through context.</p>
            <p>Saga running: {String(state)}</p>
            <button onClick={handleStartClick}>Trigger</button>
        </div>
    );
}

export default Example4;
