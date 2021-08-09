import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
    menu: string;
    expand: boolean;
}

export const initialState: HeaderState = {
    menu: 'MAGAZINE',
    expand: false
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenu(
            state,
            action: PayloadAction<string>,
        ) {
            state.menu = action.payload;
        },
        setFullSizeMenu(state) {
            state.expand = true;
        },
        setBasicSizeMenu(state) {
            state.expand = false;
        },
        leaveUser(state) {
            state.menu = initialState.menu;
            state.expand = false;
        },
    },
});

export const headerActions = headerSlice.actions;
export default headerSlice;