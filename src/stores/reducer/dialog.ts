/** @format */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateDialog {
    open: boolean;
}

const initialState: StateDialog = {
    open: false,
};

const dialogReducer = createSlice({
    name: 'dialogReducer',
    initialState,
    reducers: {
        setDialog: (state, { payload }: PayloadAction<boolean>) => {
            state.open = payload;
        },
    },
});

export const { setDialog } = dialogReducer.actions;
export default dialogReducer.reducer;

export const dialogSelector = (state: { dialog: StateDialog }) => state.dialog;
