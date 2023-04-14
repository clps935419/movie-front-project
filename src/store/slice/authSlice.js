import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const SYSTEM_NAME = process.env.REACT_APP_NAME;
const uidKey = `${SYSTEM_NAME}_uid`;
const tokenKey = `${SYSTEM_NAME}_token`;
const timeKey = `${SYSTEM_NAME}_time`;

const initialState = {
  auth: {
    uid: Cookies.get(uidKey) || "",
    token: Cookies.get(tokenKey) || "",
    time: Cookies.get(timeKey) || 0,
  },
  pic: "", //// user profile pic
  lang: Cookies.get("lang") || "en_us", // language: 如果session裡面沒存，則預設使用en_us
  languages: [], // language 下拉選單
  versionInfo: "",
  googleId:"",
};

export const authSlice = createSlice({
  name: "auth",
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
        uid: "",
        token: "",
        time: 0,
      };
    },
    setPic: (state, action) => {
      state.pic = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setLang: (state, action) => {
      Cookies.set("lang", action.payload);
      state.lang = action.payload;
    },
    setVersionInfo: (state, action) => {
      state.versionInfo = action.payload;
    },
    setActionTime: (state, action) => {
      state.actionTime = action.payload;
    },
    setLast401time: (state, action) => {
      state.last401Time = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAuth,
  clearAuth,
  setPic,
  setLanguages,
  setLang,
  setVersionInfo,
  setActionTime,
  setLast401time,
} = authSlice.actions;
export const selectAuth = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.auth;
};
export const selectPic = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.pic;
};
export const selectLang = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.lang;
};
export const selectLanguages = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.languages;
};
export const selectVersionInfo = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.versionInfo;
};
export const selectGoogleId = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.googleId;
};
export const selectActionTime = (state) => {
  return state?.[SYSTEM_NAME].authReducer?.actionTime;
};
export default authSlice.reducer;
