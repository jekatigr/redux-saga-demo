import { useDispatch, useSelector } from 'react-redux';
import { loadReset, triggerLoad } from '../store/example2/actions';

function Example2() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.example2);

    const handleStartClick = () => {
        dispatch(triggerLoad());
    }

    const handleResetClick = () => {
        dispatch(loadReset());
    }

    return (
        <div className="example">
            <p className="example__description">Example with stopping saga process with race effect.</p>
            <p>State: {state}</p>
            <button onClick={handleStartClick}>Start</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    );
}

export default Example2;
