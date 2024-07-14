import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketT from "@api/ticketType";
import ticketsMock from "@api/ticketsMock";
import getMinutesFromDuration from "@root/helpers/getMinutesFromDuration";

export interface TicketState {
  data: TicketT[];
}

const initialState: TicketState = { data: ticketsMock };

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filterByStops: (state, { payload }: PayloadAction<number[]>) => {
      if (payload.length === 0) {
        state.data = ticketsMock;

        return;
      }

      state.data = state.data.filter((ticket) => {
        if (Array.isArray(ticket.details[0].stops_locations)) {
          const stops = ticket.details[0].stops_locations?.length;

          return payload.includes(stops);
        }

        if (!ticket.details[0].stops_locations) return payload.includes(0);
      });
    },
    sortByPrice: (state) => {
      state.data = state.data.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      state.data = state.data.sort((a, b) => {
        const aMin = getMinutesFromDuration(a.details[0].duration) + getMinutesFromDuration(a.details[1].duration);
        const bMin = getMinutesFromDuration(b.details[0].duration) + getMinutesFromDuration(b.details[1].duration);

        return aMin - bMin;
      });
    },
    sortByOptimal: (state) => {
      state.data = state.data.sort((a, b) => {
        const aMin = getMinutesFromDuration(a.details[0].duration) + getMinutesFromDuration(a.details[1].duration);
        const bMin = getMinutesFromDuration(b.details[0].duration) + getMinutesFromDuration(b.details[1].duration);

        return aMin / a.price - bMin / b.price;
      });
    },
  },
});

export const { sortByDuration, filterByStops, sortByPrice, sortByOptimal } = ticketsSlice.actions;

export default ticketsSlice.reducer;
