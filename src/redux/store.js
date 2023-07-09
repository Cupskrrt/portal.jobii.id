import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice";
import { projectSlice } from "./project.slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    [projectSlice.reducerPath]: projectSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectSlice.middleware),
});
