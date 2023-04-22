import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "@/store/slice/authSlice";
import maskReducer from "@/store/slice/maskSlice.js";


const SYSTEM_NAME = process.env.REACT_APP_NAME || "test";
const reducers = combineReducers({
  authReducer,
  maskReducer,
});

const store = configureStore({
  reducer: { [SYSTEM_NAME]: reducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
