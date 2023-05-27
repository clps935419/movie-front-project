import { createSlice } from "@reduxjs/toolkit";
const SYSTEM_NAME = process.env.REACT_APP_NAME;

const initialState = {
  ticketInfo: {
    imgUrl:
      "https://www.vscinemas.com.tw/vsweb/upload/film/film_20230426002.jpg",
    movieCName: "玩命關頭X",
    movieEName: "FAST X",
    inTheatersTime: "2022-03-16T00:00:00.000+00:00",
    movieTime: 141,
    rating: "輔導級",
    dateTime: "2023-05-01T10:21:22.164+00:00",
    theaterName: "高雄影城",
    room: "A廳",
    ticketTypes: "", //票種
    ticketDetails: "", //明細
    ticketTotalPrice: "", //總計
  },
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTicketsInfo: (state, action) => {
      state.ticketInfo = {
        ...state.ticketInfo,
        ...action.payload,
      };
    },
  },
});
export const { setTicketsInfo } = ticketsSlice.actions;
export const selectTicketInfo = (state) => {
  return state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo;
};
export default ticketsSlice.reducer;
