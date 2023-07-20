import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./project.slice";
import userReducer from "./user.slice";
import { authApi } from "./auth.slice";
import { companyApi } from "./company.slice";
import { storageApi } from "./storage.slice";
import storageSession from "redux-persist/lib/storage/session";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  stateReconciler: autoMergeLevel2,
};

const reducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [storageApi.reducerPath]: storageApi.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(projectApi.middleware)
      .concat(authApi.middleware)
      .concat(companyApi.middleware)
      .concat(storageApi.middleware)
});

export const persistor = persistStore(store);
