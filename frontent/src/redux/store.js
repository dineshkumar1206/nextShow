import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../redux/AdminAuthSlice/AdminAuthSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});
