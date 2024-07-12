type TicketT = {
  price: number;
  details: Array<{
    route: string;
    time_from: string;
    time_to: string;
    duration: string;
    stops_locations: Array<string> | null;
  }>;
};

export default TicketT;
