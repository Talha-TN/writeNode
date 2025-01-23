import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../slices/PostSlice.jsx"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, PostSlice);
const store = configureStore({
    reducer:{
           PostSlice:persistedReducer
    }
})
export const persistor = persistStore(store);
export default store