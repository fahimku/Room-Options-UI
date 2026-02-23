export type Room = {
  id: string;
  name: string;
  sleeps: number;
  sqFt: number | null;
  refundable: boolean;
  perNight: number;
  total: number;
  detailsHref?: string;
};

export const ROOMS_MOCK: Room[] = [
  {
    id: "1",
    name: "Double Deluxe",
    sleeps: 2,
    sqFt: null,
    refundable: false,
    perNight: 252,
    total: 755,
  },
  {
    id: "2",
    name: "Deluxe (adapted)",
    sleeps: 2,
    sqFt: 320,
    refundable: false,
    perNight: 252,
    total: 755,
  },
  {
    id: "3",
    name: "Standard King Room, City View",
    sleeps: 2,
    sqFt: 280,
    refundable: true,
    perNight: 285,
    total: 855,
  },
  {
    id: "4",
    name: "Premier Suite, 1 King Bed, Ocean View, NonSmoking",
    sleeps: 3,
    sqFt: 450,
    refundable: false,
    perNight: 389,
    total: 1167,
  },
  {
    id: "5",
    name: "Executive Room, 2 Double Beds, NonSmoking",
    sleeps: 4,
    sqFt: 380,
    refundable: true,
    perNight: 310,
    total: 930,
  },
  {
    id: "6",
    name: "Deluxe Room, Accessible, Bathtub, 1 King Bed",
    sleeps: 2,
    sqFt: null,
    refundable: false,
    perNight: 268,
    total: 804,
  },
  {
    id: "7",
    name: "Superior Twin Room, NonSmoking",
    sleeps: 2,
    sqFt: 260,
    refundable: true,
    perNight: 245,
    total: 735,
  },
  {
    id: "8",
    name: "Family Room, 2 Queen Beds, Connecting",
    sleeps: 5,
    sqFt: 420,
    refundable: false,
    perNight: 425,
    total: 1275,
  },
];
