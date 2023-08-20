/** @format */

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from 'stores/reducer/api';
import dialogReducer from 'stores/reducer/dialog';
import langReducer from 'stores/reducer/lang';

export const store = configureStore({
    reducer: {
        api: apiReducer,
        dialog: dialogReducer,
        lang: langReducer
    },
    devTools: process.env.NODE_ENV !== 'development' ? false : true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
