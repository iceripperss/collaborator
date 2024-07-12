import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketT from "../api/ticket_type";
import tickets_mock from "../api/tickets_mock";

export interface TicketState {
  data: TicketT[];
}

const initialState: TicketState = { data: tickets_mock };

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filterByStops: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((ticket) => ticket.details[0].stops_locations?.length === action.payload);
    },
    sortByPrice: (state) => {
      state.data = state.data.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      state.data = state.data.sort((a, b) => {
        const durationA = a.details[0].duration.split(" ")[0];
        const durationB = b.details[0].duration.split(" ")[0];

        return parseInt(durationA, 10) - parseInt(durationB, 10);
      });
    },
    reset: (state) => {
      state.data = tickets_mock;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset, sortByDuration, filterByStops, sortByPrice } = ticketsSlice.actions;

export default ticketsSlice.reducer;
