const d = new Date();
const date = d.toString().split(" ");

export interface DataProps {
  id: number;
  brand: string;
  year: number;
  model: string;
  color: string;
  po: string;
  stock: string;
  vin: string;
  month: string;
  date: string;
}

export const fetchData = [
  {
    id: 1,
    brand: "SUBARU",
    year: 2024,
    model: "CROSSTREK",
    color: "RED",
    po: "66543",
    stock: "24CRO43445",
    vin: "RS23F233",
    month: date[1],
    date: date[2],
  },
  {
    id: 2,
    brand: "MAZDA",
    year: 2024,
    model: "FORESTER",
    color: "RED",
    po: "66543",
    stock: "24CRO43445",
    vin: "RS23F233",
    month: date[1],
    date: date[2],
  },
  {
    id: 3,
    brand: "NISSAN",
    year: 2024,
    model: "OUTBACK",
    color: "RED",
    po: "66543",
    stock: "24CRO43445",
    vin: "RS23F233",
    month: date[1],
    date: date[2],
  },
  {
    id: 4,
    brand: "HYUNDAI",
    year: 2024,
    model: "CSD23",
    color: "RED",
    po: "66543",
    stock: "24CRO43445",
    vin: "RS23F233",
    month: date[1],
    date: date[2],
  },
  {
    id: 5,
    brand: "MERCEDES-BENZ",
    year: 2024,
    model: "CSD23",
    color: "RED",
    po: "66543",
    stock: "24CRO43445",
    vin: "RS23F233",
    month: date[1],
    date: date[2],
  },
];
