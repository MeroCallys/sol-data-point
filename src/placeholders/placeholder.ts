const d = new Date();
const date = d.toString().split(" ");

export interface DataProps {
  id: number;
  category: string;
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
    category: "Gateway Subaru",
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
    category: "Go Mazda",
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
    category: "Go Nissan",
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
    category: "GMC Wolfe Buick",
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
    category: "Go Mazda",
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
  {
    id: 6,
    category: "Mercedes-benz West",
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
  {
    id: 7,
    category: "Gateway Acura",
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
  {
    id: 8,
    category: "Mitsubishi Kross",
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
  {
    id: 9,
    category: "Go Mazda",
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
  {
    id: 10,
    category: "Go Mazda",
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
