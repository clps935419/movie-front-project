import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const SYSTEM_NAME = process.env.REACT_APP_NAME;
const uidKey = `${SYSTEM_NAME}_uid`;
const tokenKey = `${SYSTEM_NAME}_token`;
const timeKey = `${SYSTEM_NAME}_time`;

const initialState = {
  auth: {
    uid: Cookies.get(uidKey) || '',
    token: Cookies.get(tokenKey) || '',
    time: Cookies.get(timeKey) || 0,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { uid, token, time } = action.payload;
      Cookies.set(uidKey, uid);
      Cookies.set(tokenKey, token);
      Cookies.set(timeKey, time);
      state.auth = {
        uid,
        token,
        time,
      };
    },
    clearAuth: (state) => {
      Cookies.remove(uidKey);
      Cookies.remove(tokenKey);
      Cookies.remove(timeKey);
      state.auth = {
        uid: '',
        token: '',
        time: 0,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions;
export const selectAuth = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.auth;
};
export default authSlice.reducer;
