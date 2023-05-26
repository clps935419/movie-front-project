import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maskQueueArr: [],
    zIndex: 1100,
};

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.allChoosedTickets = action.payload
        },
    }
})
export const { setTickets } = ticketsSlice.actions;
export default ticketsSlice.reducer;
