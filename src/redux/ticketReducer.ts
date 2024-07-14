import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketT from "@api/ticketType";
import ticketsMock from "@api/ticketsMock";
import getMinutesFromDuration from "@root/helpers/getMinutesFromDuration";

export interface TicketState {
  data: TicketT[];
  filteredData: TicketT[];
  more: number;
}

const initialState: TicketState = { data: ticketsMock, filteredData: ticketsMock, more: 1 };

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    filterByStops: (state, { payload }: PayloadAction<Array<number>>) => {
      if (!payload.length) {
        state.filteredData = state.data;

        return;
      }

      state.filteredData = state.data.filter((ticket) => {
        const ticketStops = ticket.details[0].stops_locations;

        if (Array.isArray(ticketStops)) {
          const stopsLength = ticket.details[0].stops_locations?.length;

          return payload.includes(stopsLength);
        }

        return payload.includes(0);
      });
    },
    sortByPrice: (state) => {
      state.filteredData = state.filteredData.sort((a, b) => a.price - b.price);
    },
    sortByDuration: (state) => {
      state.filteredData = state.filteredData.sort((a, b) => {
        const aMin = getMinutesFromDuration(a.details[0].duration) + getMinutesFromDuration(a.details[1].duration);
        const bMin = getMinutesFromDuration(b.details[0].duration) + getMinutesFromDuration(b.details[1].duration);

        return aMin - bMin;
      });
    },
    sortByOptimal: (state) => {
      state.filteredData = state.filteredData.sort((a, b) => {
        const aMin = getMinutesFromDuration(a.details[0].duration) + getMinutesFromDuration(a.details[1].duration);
        const bMin = getMinutesFromDuration(b.details[0].duration) + getMinutesFromDuration(b.details[1].duration);

        return aMin / a.price - bMin / b.price;
      });
    },
    incrementMore: (state) => {
      state.more += 1;
    },
    resetMore: (state) => {
      state.more = 1;
    },
  },
});

export const { incrementMore, resetMore, sortByDuration, filterByStops, sortByPrice, sortByOptimal } = ticketsSlice.actions;

export default ticketsSlice.reducer;
