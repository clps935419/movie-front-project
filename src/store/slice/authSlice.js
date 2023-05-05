import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const SYSTEM_NAME = process.env.REACT_APP_NAME;
const uidKey = `${SYSTEM_NAME}_uid`;
const emailKey = `${SYSTEM_NAME}_email`;
const tokenKey = `${SYSTEM_NAME}_token`;
const timeKey = `${SYSTEM_NAME}_time`;

const initialState = {
  auth: {
    uid: Cookies.get(uidKey) || '',
    email: Cookies.get(emailKey) || '',
    token: Cookies.get(tokenKey) || '',
    time: Cookies.get(timeKey) || 0,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { uid, email, token, time } = action.payload;
      Cookies.set(uidKey, uid);
      Cookies.set(emailKey, email);
      Cookies.set(tokenKey, token);
      Cookies.set(timeKey, time);
      state.auth = {
        uid,
        email,
        token,
        time,
      };
    },
    clearAuth: (state) => {
      Cookies.remove(uidKey);
      Cookies.remove(emailKey);
      Cookies.remove(tokenKey);
      Cookies.remove(timeKey);
      state.auth = {
        uid: '',
        email: '',
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
