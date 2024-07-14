import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketT from "@api/ticketType";
import ticketsMock from "@api/ticketsMock";
import dayjs from "dayjs";
import ticket from "@components/ListGroup/Ticket";

export interface TicketState {
  data: TicketT[];
}

const initialState: TicketState = { data: ticketsMock };

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filterByStops: (state, action: PayloadAction<number[]>) => {
      state.data = state.data.filter((ticket) => action.payload.includes(ticket.details[0].stops_locations?.length));
    },
    sortByPrice: (state) => {
      state.data = state.data.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      state.data = state.data.sort((a, b) => {
        const durationA1 = a.details[0].duration;
        const durationA2 = a.details[1].duration;
        const aS = dayjs(durationA1, "HH:mm").diff(dayjs(durationA2, "HH:mm"));
        const durationB1 = b.details[0].duration;
        const durationB2 = b.details[1].duration;
        const bS = dayjs(durationB1, "HH:mm").diff(dayjs(durationB2, "HH:mm"));

        return aS - bS;
      });
    },
    sortByOptimal: (state) => {
      const { data } = state;
      data.map((item) => item.price / (item.details[0].duration.split(" ")[0] + item.details[1].duration.split(" ")[0]));
    },
    reset: (state) => {
      state.data = ticketsMock;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset, sortByDuration, filterByStops, sortByPrice, sortByOptimal } = ticketsSlice.actions;

export default ticketsSlice.reducer;
