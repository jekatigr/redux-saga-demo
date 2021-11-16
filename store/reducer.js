import { combineReducers } from "redux";
import reducer1 from "./example1/reducer";
import reducer2 from "./example2/reducer";
import reducer3 from "./example3/reducer";
import reducer4 from "./example4/reducer";

export default combineReducers({
    example1: reducer1,
    example2: reducer2,
    example3: reducer3,
    example4: reducer4,
});
