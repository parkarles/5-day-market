import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CoreState = {
    size: string;
    popup: {
        title: string | undefined;
        message: string;
        visible: boolean;
    };
};

const initialState: CoreState = {
    size: "md",
    popup: {
        visible: false,
        title: '',
        message: '',
    },
};


const coreSlice = createSlice({
    name: 'core',
    initialState,
    reducers: {
        openPopup(
            state,
            action: PayloadAction<{
                title: string;
                message: string;
            }>,
        ) {
            state.popup.title = action.payload.title;
            state.popup.message = action.payload.message;
            state.popup.visible = true;
        },
    },
});

export const coreActions = coreSlice.actions;
export default coreSlice;