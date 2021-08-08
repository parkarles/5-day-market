import { createReducer } from 'typesafe-actions';
import { CoreState, CoreAction } from './types';

// import {
//     SET_MENU
// } from './actions';
import produce from 'immer';

const initialState: CoreState = {
    size: "md",
    popup: {
        visible: false,
        title: '',
        message: '',
    },
};

const core = createReducer<CoreState, CoreAction>(initialState, {
    // [SET_MENU]: (state, action) =>
    //     produce(state, draft => {
    //         draft.title = action.payload.title;
    //         draft.popup.message = action.payload.message;
    //     }),
    // [CLOSE_POPUP]: state =>
    //     produce(state, draft => {
    //         draft.popup.visible = false;
    //     }),
});

export default core;