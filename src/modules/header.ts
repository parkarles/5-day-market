import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
    menu: string;
    expand: boolean;
}

const initialState: HeaderState = {
    menu: 'MAGAZINE',
    expand: false
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenu(
            state,
            action: PayloadAction<{
                menu: string;
                expand?: boolean | null;
            }>,
        ) {
            state.menu = action.payload.menu;
            state.expand = action.payload.expand || false;
        },
        leaveUser(state) {
            state.menu = initialState.menu;
            state.expand = false;
        },
    },
});

// export const { setMenu, leaveUser } = headerSlice.actions;
export default headerSlice;