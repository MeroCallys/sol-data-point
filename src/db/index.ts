import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

db.orders.create({
  data: {
    poNumber: "66687",
    stockNumber: "24CRO2323",
    workOrder: "N/A",
    keyTag: "N/A",
    vin: "RH4523S2",
    model: "24 Forester",
    color: "C. Green",
    description: "H, F, B, M & DC",
    price: 122323.23,
    paid: true,
    type: "Dealership",
    requestorsFirstName: "Angela",
    requestorsLastName: "Aculli",
    requestorsEmail: "angela.a@acura.com",
    requestorsPhone: "+1 232-232-2222",
    requestorsCompany: "Southview Acura",
  },
});

// orderId            Int     @id @default(autoincrement())
//   poNumber           String
//   stockNumber        String
//   workOrder          String
//   keyTag             String
//   vin                String
//   model              String
//   color              String
//   description        String
//   price              Float
//   dos                DateTime @default(now())
//   pod                DateTime @default(now())
//   dod                DateTime @updatedAt
//   paid               Boolean  @default(false)
//   type               String
//   requestorsFirstName String
//   requestorsLastName String
//   requestorsEmail   String
//   requestorsPhone   String
//   requestorsCompany String
