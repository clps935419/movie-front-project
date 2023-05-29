import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

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
    currentChooseTickets: {}, //目前已經選擇的票種物件
    seats: [],
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
    setCurrentChooseTickets: (state, action) => {
      const ticketItem = action.payload;
      if (_.isEmpty(ticketItem)) {
        return;
      }
      let reduxTicketObj = state.ticketInfo;
      const { _id, currentTicketCount } = ticketItem;
      if (
        currentTicketCount === 0 &&
        !!reduxTicketObj.currentChooseTickets[_id]
      ) {
        //刪除輸入數量為0且存在redux的資料
        delete reduxTicketObj.currentChooseTickets[_id];
      } else {
        if (reduxTicketObj.currentChooseTickets[_id] !== undefined) {
          reduxTicketObj.currentChooseTickets[_id] = {
            ...reduxTicketObj.currentChooseTickets[_id],
            currentTicketCount,
          };
        } else {
          reduxTicketObj.currentChooseTickets[_id] = ticketItem;
        }
      }
    },
    setTicketsSeats: (state, action) => {
      state.ticketInfo.seats = action.payload;
    },
  },
});
export const { setTicketsInfo, setCurrentChooseTickets, setTicketsSeats } =
  ticketsSlice.actions;
export const selectTicketInfo = (state) => {
  return state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo;
};
export const selectCurrentChooseTicket = (state) => {
  return state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
};
//票種名稱計算
export const selectCurrentTicketTypesArr = (state) => {
  const currentChooseObj =
    state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
  let tmpNameArr = [];
  if (_.isEmpty(currentChooseObj)) {
    return [];
  }
  for (const [id, ticketObj] of Object.entries(currentChooseObj)) {
    const { name, currentTicketCount, content, price } = ticketObj;
    if (currentTicketCount === 0) {
      continue;
    }
    tmpNameArr.push(`${name} X ${currentTicketCount}`);
  }

  return tmpNameArr;
};
//票明細計算
export const selectCurrentTicketDetailsArr = (state) => {
  const currentChooseObj =
    state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
  if (_.isEmpty(currentChooseObj)) {
    return [];
  }
  let tmpTicketContent = [];
  for (const [id, ticketObj] of Object.entries(currentChooseObj)) {
    const { name, currentTicketCount, content, price } = ticketObj;
    if (currentTicketCount === 0) {
      continue;
    }
    tmpTicketContent.push(`${content}共${currentTicketCount}組`);
  }

  return tmpTicketContent;
};
//票價總計計算
export const selectCurrentTicketTotalPrice = (state) => {
  const currentChooseObj =
    state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
  if (_.isEmpty(currentChooseObj)) {
    return 0;
  }
  let tmpTotalNum = 0;
  for (const [id, ticketObj] of Object.entries(currentChooseObj)) {
    const { name, currentTicketCount, content, price } = ticketObj;
    if (currentTicketCount === 0) {
      continue;
    }
    const currentTicketTotalPrice = price * currentTicketCount; //單個票種總價
    tmpTotalNum += currentTicketTotalPrice;
  }

  return tmpTotalNum;
};
//票數總計算
export const selectCurrentTicketTotalCount = (state) => {
  const currentChooseObj =
    state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
  if (_.isEmpty(currentChooseObj)) {
    return 0;
  }  
  let tmpTotalNum = 0;
  for (const [id, ticketObj] of Object.entries(currentChooseObj)) {
    const { name, currentTicketCount, content, price, ticketCount } = ticketObj;
    if (currentTicketCount === 0) {
      continue;
    }
    const calcTicketNum = currentTicketCount * ticketCount;
    tmpTotalNum += calcTicketNum;
  }

  return tmpTotalNum;
};
//回傳票種ID陣列(會重複)
export const selectCurrentTicketIdArr = (state) => {
  const currentChooseObj =
    state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.currentChooseTickets;
  if (_.isEmpty(currentChooseObj)) {
    return [];
  }  
  let tmpArr = [];
  Object.keys(currentChooseObj).forEach((key) => {
    const ticketNum = currentChooseObj[key].currentTicketCount;
    const resultArr = Array.from({ length: ticketNum }, () => key);
    tmpArr = [...tmpArr, ...resultArr];
  });
  return tmpArr;
};
//回傳目前選的座位
export const selectCurrentChooseSeatArr = (state) => {
  const currentSeats = state?.[SYSTEM_NAME].ticketsReducer?.ticketInfo.seats;
  if (currentSeats.length === 0) {
    return [];
  }
  return currentSeats.map((item) => {
    return {
      col: item.col,
      row: item.row,
    };
  });
};
export default ticketsSlice.reducer;
