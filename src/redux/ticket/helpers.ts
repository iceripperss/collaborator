import { TicketT } from "@api/ticketType";

export const getMinutesFromDetails = (ticket: TicketT): number =>
  ticket.details.reduce((sum, detail) => sum + getMinutesFromDuration(detail.duration), 0);

export const getMinutesFromDuration = (duration: string) => {
  const durationArray = duration.split(":");

  return parseInt(durationArray[0], 10) * 60 + parseInt(durationArray[1], 10);
};

export const getTotalTransfers = (ticket: TicketT): number =>
  ticket.details.reduce((total, detail) => total + (detail.transfers ? detail.transfers.length : 0), 0);

export const getTransfersDiff = (current: TicketT, next: TicketT) => getDiff({ current, next, func: getTotalTransfers });

export const getPricesDiff = (current: TicketT, next: TicketT) => current.price - next.price;

export const getMinutesDiff = (current: TicketT, next: TicketT) => getDiff({ current, next, func: getMinutesFromDetails });

type DiffT = { current: TicketT; next: TicketT; func: (ticket: TicketT) => number };

export const getDiff = ({ current, next, func }: DiffT) => {
  const currentValue = func(current);
  const nextValue = func(next);

  return currentValue - nextValue;
};
