import TicketT from "./ticketType";

const ticketsMock: TicketT[] = [
  {
    price: 13300,
    details: [
      {
        route: "LHR - DXB",
        time_from: "10:45",
        time_to: "08:00",
        duration: "34:15",
        stops_locations: ["HKG"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "16:30",
        stops_locations: ["HKG"],
      },
    ],
  },
  {
    price: 15100,
    details: [
      {
        route: "LHR - DXB",
        time_from: "10:45",
        time_to: "08:00",
        duration: "17:15",
        stops_locations: ["HKG", "JNB"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "40:30",
        stops_locations: ["HKG", "JNB"],
      },
    ],
  },
  {
    price: 15400,
    details: [
      {
        route: "LHR - DXB",
        time_from: "10:45",
        time_to: "08:00",
        duration: "20:15",
        stops_locations: ["HKG"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "13:30",
        stops_locations: ["HKG"],
      },
    ],
  },
  {
    price: 21400,
    details: [
      {
        route: "LHR - DXB",
        time_from: "10:45",
        time_to: "08:00",
        duration: "21:15",
        stops_locations: ["HKG, JNB, JNB"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "12:30",
        stops_locations: ["HKG, JNB, JNB"],
      },
    ],
  },
  {
    price: 23900,
    details: [
      {
        route: "LHR - DXB",
        time_from: "10:45",
        time_to: "08:00",
        duration: "11:15",
        stops_locations: null,
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "9:30",
        stops_locations: null,
      },
    ],
  },
];

export default ticketsMock;
