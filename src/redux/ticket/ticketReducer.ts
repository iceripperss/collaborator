import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TicketT } from "@api/ticketType";
import { getMinutesFromDetails } from "@root/helpers/getMinutesFromDetails";
import { getTotalTransfers } from "@root/helpers/getTransfersFromDetails";

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
      state.filteredData = state.filteredData.sort((current, next) => current.price - next.price);
    },
    sortByDuration: (state) => {
      state.filteredData = state.filteredData.sort((current, next) => {
        const currentMinutes = getMinutesFromDetails(current.details);
        const nextMinutes = getMinutesFromDetails(next.details);

        return currentMinutes - nextMinutes;
      });
    },
    sortByOptimal: (state) => {
      state.filteredData = state.filteredData.sort((a, b) => {
        const aTotalMinutes = getMinutesFromDetails(a.details);
        const bTotalMinutes = getMinutesFromDetails(b.details);

        if (aTotalMinutes !== bTotalMinutes) {
          return aTotalMinutes - bTotalMinutes;
        }

        const aTotalTransfers = getTotalTransfers(a.details);
        const bTotalTransfers = getTotalTransfers(b.details);

        if (aTotalTransfers !== bTotalTransfers) {
          return aTotalTransfers - bTotalTransfers;
        }

        return a.price - b.price;
      });
    },
    setMore: (state, { payload }: PayloadAction<number>) => {
      state.more = payload;
    },
  },
});

export const { setMore, sortByDuration, filterByTransfers, sortByPrice, sortByOptimal, setTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;
