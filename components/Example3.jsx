import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerLeading, triggerLatest, reset } from '../store/example3/actions';

function Example3() {
    const dispatch = useDispatch();
    const {
        latest,
        leading,
    } = useSelector(state => state.example3);

    const [leadingRuns, setLeadingRuns] = useState(0);
    const [latestRuns, setLatestRuns] = useState(0);

    const handleLeadingStartClick = () => {
        dispatch(triggerLeading(leadingRuns));
        setLeadingRuns((r) => r + 1);
    }

    const handleLatestStartClick = () => {
        dispatch(triggerLatest(latestRuns));
        setLatestRuns((r) => r + 1);
    }

    const handleResetClick = () => {
        setLeadingRuns(0);
        setLatestRuns(0);
        dispatch(reset());
    }

    return (
        <div className="example">
            <p className="example__description">Example for takeLeading and takeLatest effects.</p>
            <div>
                <div>
                    <button onClick={handleLeadingStartClick}>Start saga with id: {leadingRuns}</button>
                    <p>takeLeading winner saga id: {leading.winnerId === -1 ? 'waiting...' : leading.winnerId}, saga running: {String(leading.running)}</p>
                </div>
                <div>
                    <button onClick={handleLatestStartClick}>Start saga with id: {latestRuns}</button>
                    <p>takeLatest winner saga id: {latest.winnerId === -1 ? 'waiting...' : latest.winnerId}, saga running: {String(latest.running)}</p>
                </div>
            </div>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    );
}

export default Example3;
