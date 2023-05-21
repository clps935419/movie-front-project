//共用slice
import { createSlice } from "@reduxjs/toolkit";

const SYSTEM_NAME = process.env.REACT_APP_NAME;
const initialState = {
  isShowHamburgerMenu: false,
};

export const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {
    setIsShowHamburgerMenu: (state, action) => {
      state.isShowHamburgerMenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsShowHamburgerMenu } = publicSlice.actions;

export const selectIsShowHamburgerMenu = (state) => {
  return state?.[SYSTEM_NAME].publicReducer?.isShowHamburgerMenu;
};
export default publicSlice.reducer;
