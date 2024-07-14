import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { TicketT } from "@api/ticketType";

type TicketsResponse = { tickets: TicketT[]; isMore: boolean };
export const useTickets = (): TicketsResponse =>
  useSelector((state: RootState) => ({
    tickets: state.tickets.filteredData.slice(0, state.tickets.more * 5),
    isMore: state.tickets.filteredData.length > state.tickets.more * 5,
  }));
