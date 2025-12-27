import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../redux/AdminAuthSlice/AdminAuthSlice";
import VideoSection from "../redux/HomeContentSlice/VideoSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    videoSection: VideoSection,
  },
});
