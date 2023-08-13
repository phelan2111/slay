/** @format */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    dataAPI: {
        code: number;
        data: {};
    };
    loading: boolean | null;
    errors: string;
    authentication: string;
}

const initialState: State = {
    dataAPI: {
        code: 0,
        data: {},
    },
    loading: false,
    errors: '',
    authentication: '',
};

const apiReducer = createSlice({
    name: 'apiReducer',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean | null>) => {
            state.loading = payload;
        },

        setErrors: (state, { payload }: PayloadAction<string>) => {
            state.errors = payload;
        },

        setData: (state, { payload }: PayloadAction<{ code: number; data: {} }>) => {
            state.dataAPI = payload;
        },
        setAuthentication: (state, { payload }: PayloadAction<string>) => {
            state.authentication = payload;
        },
    },
});

export const { setLoading, setErrors, setData, setAuthentication } = apiReducer.actions;
export default apiReducer.reducer;

export const apiSelector = (state: { api: State }) => state.api;
