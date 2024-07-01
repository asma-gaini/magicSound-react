import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});
