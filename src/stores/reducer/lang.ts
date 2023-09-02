/** @format */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StateLang {
    lang: 'vn' | 'en';
}

const initialState: StateLang = {
    lang: 'en'
};

const langReducer = createSlice({
    name: 'langReducer',
    initialState,
    reducers: {
        setLangs: (state, { payload }: PayloadAction<StateLang>) => {
            state.lang = payload.lang;
        },
    },
});

export const { setLangs } = langReducer.actions;
export default langReducer.reducer;

export const langSelector = (state: { lang: StateLang }) => state.lang;
