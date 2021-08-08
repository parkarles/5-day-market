import { combineReducers } from 'redux';
import header, { HeaderState } from './header';

export type RootState = {
    // core: CoreState;
    header: HeaderState;
};

const rootReducer = combineReducers({
    // core,
    header: header.reducer,
});

export const headerAction = {
    setMenu: header.actions.setMenu,
};

export default rootReducer;