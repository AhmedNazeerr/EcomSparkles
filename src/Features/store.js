import { configureStore } from "@reduxjs/toolkit";
import { sparklesSlice } from "./slice";

export const store = configureStore({
    reducer: sparklesSlice.reducer
});