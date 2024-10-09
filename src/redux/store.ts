import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";
import themeReducer from './reducers/themeReducer';

export const store = configureStore({
    reducer: {
        user: userReducers,
        theme: themeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;