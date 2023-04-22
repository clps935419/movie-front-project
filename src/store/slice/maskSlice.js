import { createSlice } from "@reduxjs/toolkit";

const SYSTEM_NAME = process.env.REACT_APP_NAME;
const initialState = {
  maskQueueArr: [],
  zIndex: 1100,
};

export const maskSlice = createSlice({
  name: "mask",
  initialState,
  reducers: {
    setMaskArr: (state, action) => {
      state.maskQueueArr = [...state.maskQueueArr, action.payload];
      state.zIndex += 1;
    },
    setClearMaskArr: (state, action) => {
      state.maskQueueArr = state.maskQueueArr.filter((item) => {
        return item.id !== action.payload;
      });
      state.zIndex -= 1;
    },
    setClearMaskArrAll: (state, action) => {
      state.maskQueueArr = [];
      state.zIndex = 1100;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  setMaskArr,
  setClearMaskArr,
  setClearMaskArrAll,
} = maskSlice.actions;

export const selectMaskArr = (state) => {
  return state?.[SYSTEM_NAME].maskReducer?.maskQueueArr;
};
export const selectMaskZIndex = (state) => {
  return state?.[SYSTEM_NAME].maskReducer?.zIndex;
};
export default maskSlice.reducer;
