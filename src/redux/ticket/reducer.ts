import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketT } from "@api/ticketType";
import { getMinutesDiff, getPricesDiff, getTransfersDiff } from "@redux/ticket/helpers";

export interface TicketState {
  data: TicketT[];
  filteredData: TicketT[];
  more: number;
}

const initialState: TicketState = { data: [], filteredData: [], more: 1 };

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setTickets: (state, { payload }: PayloadAction<TicketT[]>) => {
      state.data = payload;
      state.filteredData = payload;
    },
    filterByTransfers: (state, { payload }: PayloadAction<Array<number>>) => {
      if (!payload.length) {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter((ticket) => {
          const { transfers } = ticket.details[0];

          if (transfers) {
            const transfersLength = transfers.length;

            return payload.includes(transfersLength);
          }

          return payload.includes(0);
        });
      }
    },
    sortByPrice: (state) => {
      state.filteredData = state.filteredData.sort(getPricesDiff);
      state.more = 1;
    },
    sortByDuration: (state) => {
      state.filteredData = state.filteredData.sort(getMinutesDiff);

      state.more = 1;
    },
    sortByOptimal: (state) => {
      state.filteredData = state.filteredData.sort((current, next) => {
        const minutesDiff = getMinutesDiff(current, next);

        if (minutesDiff !== 0) return minutesDiff;

        const transfersDiff = getTransfersDiff(current, next);

        if (transfersDiff !== 0) return transfersDiff;

        return getPricesDiff(current, next);
      });

      state.more = 1;
    },
    more: (state) => {
      state.more += 1;
    },
  },
});

export const ticketsActions = ticketsSlice.actions;

export default ticketsSlice.reducer;
