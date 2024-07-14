import TicketT from "@api/ticketType";

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
        stops_locations: ["HKG", "JNB", "JNB"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:20",
        time_to: "00:50",
        duration: "12:30",
        stops_locations: ["HKG", "JNB", "JNB"],
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
  {
    price: 24500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "11:00",
        time_to: "08:15",
        duration: "12:15",
        stops_locations: ["AMS"],
      },
      {
        route: "DXB - LHR",
        time_from: "11:30",
        time_to: "01:00",
        duration: "10:30",
        stops_locations: ["AMS"],
      },
    ],
  },
  {
    price: 26500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "11:30",
        time_to: "08:30",
        duration: "13:00",
        stops_locations: ["CDG"],
      },
      {
        route: "DXB - LHR",
        time_from: "12:00",
        time_to: "01:30",
        duration: "11:30",
        stops_locations: ["CDG"],
      },
    ],
  },
  {
    price: 20500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "12:00",
        time_to: "09:00",
        duration: "14:00",
        stops_locations: ["FRA"],
      },
      {
        route: "DXB - LHR",
        time_from: "12:30",
        time_to: "02:00",
        duration: "12:30",
        stops_locations: ["FRA"],
      },
    ],
  },
  {
    price: 30500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "12:30",
        time_to: "09:30",
        duration: "15:00",
        stops_locations: ["IST"],
      },
      {
        route: "DXB - LHR",
        time_from: "13:00",
        time_to: "02:30",
        duration: "13:30",
        stops_locations: ["IST"],
      },
    ],
  },
  {
    price: 12500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "13:00",
        time_to: "10:00",
        duration: "16:00",
        stops_locations: ["ZRH"],
      },
      {
        route: "DXB - LHR",
        time_from: "13:30",
        time_to: "03:00",
        duration: "14:30",
        stops_locations: ["ZRH"],
      },
    ],
  },
  {
    price: 34500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "13:30",
        time_to: "10:30",
        duration: "17:00",
        stops_locations: ["MUC"],
      },
      {
        route: "DXB - LHR",
        time_from: "14:00",
        time_to: "03:30",
        duration: "15:30",
        stops_locations: ["MUC"],
      },
    ],
  },
  {
    price: 36500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "14:00",
        time_to: "11:00",
        duration: "18:00",
        stops_locations: ["ATH"],
      },
      {
        route: "DXB - LHR",
        time_from: "14:30",
        time_to: "04:00",
        duration: "16:30",
        stops_locations: ["ATH"],
      },
    ],
  },
  {
    price: 38500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "14:30",
        time_to: "11:30",
        duration: "19:00",
        stops_locations: ["BCN"],
      },
      {
        route: "DXB - LHR",
        time_from: "15:00",
        time_to: "04:30",
        duration: "17:30",
        stops_locations: ["BCN"],
      },
    ],
  },
  {
    price: 40500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "15:00",
        time_to: "12:00",
        duration: "20:00",
        stops_locations: ["MAD"],
      },
      {
        route: "DXB - LHR",
        time_from: "15:30",
        time_to: "05:00",
        duration: "18:30",
        stops_locations: ["MAD"],
      },
    ],
  },
  {
    price: 42500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "15:30",
        time_to: "12:30",
        duration: "21:00",
        stops_locations: ["FCO"],
      },
      {
        route: "DXB - LHR",
        time_from: "16:00",
        time_to: "05:30",
        duration: "19:30",
        stops_locations: ["FCO"],
      },
    ],
  },
  {
    price: 44500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "16:00",
        time_to: "13:00",
        duration: "22:00",
        stops_locations: ["VIE"],
      },
      {
        route: "DXB - LHR",
        time_from: "16:30",
        time_to: "06:00",
        duration: "20:30",
        stops_locations: ["VIE"],
      },
    ],
  },
  {
    price: 46500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "16:30",
        time_to: "13:30",
        duration: "23:00",
        stops_locations: ["BRU"],
      },
      {
        route: "DXB - LHR",
        time_from: "17:00",
        time_to: "06:30",
        duration: "21:30",
        stops_locations: ["BRU"],
      },
    ],
  },
  {
    price: 48500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "17:00",
        time_to: "14:00",
        duration: "24:00",
        stops_locations: ["LIS"],
      },
      {
        route: "DXB - LHR",
        time_from: "17:30",
        time_to: "07:00",
        duration: "22:30",
        stops_locations: ["LIS"],
      },
    ],
  },
  {
    price: 50500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "17:30",
        time_to: "14:30",
        duration: "25:00",
        stops_locations: ["DUB"],
      },
      {
        route: "DXB - LHR",
        time_from: "18:00",
        time_to: "07:30",
        duration: "23:30",
        stops_locations: ["DUB"],
      },
    ],
  },
  {
    price: 32500,
    details: [
      {
        route: "LHR - DXB",
        time_from: "18:00",
        time_to: "24:00",
        duration: "06:00",
        stops_locations: null,
      },
      {
        route: "DXB - LHR",
        time_from: "18:30",
        time_to: "08:00",
        duration: "13:30",
        stops_locations: null,
      },
    ],
  },
];

export default ticketsMock;
