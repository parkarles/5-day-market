import { combineReducers } from "redux";
import header, { HeaderState } from "./header";

export { actions } from "./actions";

export interface RootState {
    // core: CoreState;
    header: HeaderState;
};

const rootReducer = combineReducers({
    // core: core.reducer,
    header: header.reducer,
});

export default rootReducer;