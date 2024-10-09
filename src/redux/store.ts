import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./reducers/userReducers";

export const store = configureStore({
    reducer: {
        user: userReducers
    }
});

export type RootState = ReturnType<typeof store.getState>;