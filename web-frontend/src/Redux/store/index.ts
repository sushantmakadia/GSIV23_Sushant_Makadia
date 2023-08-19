import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import movieInfo from "../reducers/movieInfo";

const persistConfig = {
  key: "root",
  blacklist: ['search'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, movieInfo);

const store = configureStore({
  reducer: persistedReducer,
});
export type RootState = ReturnType<typeof movieInfo>;
const reduxPersist = persistStore(store);
export { store, reduxPersist };