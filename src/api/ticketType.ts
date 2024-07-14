export type TicketT = {
  price: number;
  details: Array<{
    route: string;
    time_from: string;
    time_to: string;
    duration: string;
    transfers: Array<string> | null;
  }>;
};
