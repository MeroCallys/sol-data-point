import { Interface } from "readline";

const d = new Date();
const date = d.toString().split(" ");

export interface DataProps {
  id?: number | any;
  category?: string;
  brand?: string;
  year?: number;
  model?: string;
  color?: string;
  po?: string;
  stock?: string;
  vin?: string;
  month?: string | any;
  date?: string;
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

export interface fethProfilesProps {
  id?: number | any;
  type?: string;
  company?: string;
  requestorFirstName?: string;
  requestorLastName?: string;
  totalOrders?: number;
  unpaidOrders?: number;
  month?: string | any;
  date?: string;
}

export const fetchProfiles = [
  {
    id: 1,
    type: "DEALERSHIP",
    company: "SOUTHVIEW ACURA",
    requestorFirstName: "ANGELA",
    requestorLastName: "ACCULI",
    totalOrders: 654,
    unpaidOrders: 86,
    month: date[1],
    date: date[2],
  },
  {
    id: 2,
    type: "DEALERSHIP",
    company: "GATEWAY SUBARU",
    requestorFirstName: "HARRY",
    requestorLastName: "POTTER",
    totalOrders: 522,
    unpaidOrders: 10,
    month: date[1],
    date: date[2],
  },
  {
    id: 3,
    type: "DEALERSHIP",
    company: "KROSS MITSUBISHI",
    requestorFirstName: "HERMIONE",
    requestorLastName: "WILLIAMS",
    totalOrders: 89,
    unpaidOrders: 15,
    month: date[1],
    date: date[2],
  },
  {
    id: 4,
    type: "DEALERSHIP",
    company: "GO NISSAN",
    requestorFirstName: "LEO",
    requestorLastName: "SWISS",
    totalOrders: 89,
    unpaidOrders: 15,
    month: date[1],
    date: date[2],
  },
  {
    id: 5,
    type: "WALK-IN",
    company: "WALK-IN",
    requestorFirstName: "MISTY",
    requestorLastName: "ROCK",
    totalOrders: 1,
    unpaidOrders: 0,
    month: date[1],
    date: date[2],
  },
  {
    id: 6,
    type: "DEALERSHIP",
    company: "CHEVROLET LAKEWOOD",
    requestorFirstName: "JEFF",
    requestorLastName: "MONTYS",
    totalOrders: 667,
    unpaidOrders: 0,
    month: date[1],
    date: date[2],
  },
  {
    id: 7,
    type: "DEALERSHIP",
    company: "MERCEDEZ-BENZ WEST",
    requestorFirstName: "MADISON",
    requestorLastName: "MERRY",
    totalOrders: 77,
    unpaidOrders: 5,
    month: date[1],
    date: date[2],
  },
  {
    id: 8,
    type: "WALK-IN",
    company: "AUTHOSHIELD",
    requestorFirstName: "PAUL",
    requestorLastName: "LEODONES",
    totalOrders: 25,
    unpaidOrders: 1,
    month: date[1],
    date: date[2],
  },
  {
    id: 9,
    type: "WALK-IN",
    company: "MERCARI",
    requestorFirstName: "SONGBO",
    requestorLastName: "ZHANGI",
    totalOrders: 11,
    unpaidOrders: 0,
    month: date[1],
    date: date[2],
  },
  {
    id: 10,
    type: "WALK-IN",
    company: "LOOKGOOD",
    requestorFirstName: "MYKA",
    requestorLastName: "LEE",
    totalOrders: 1,
    unpaidOrders: 1,
    month: date[1],
    date: date[2],
  },
];
