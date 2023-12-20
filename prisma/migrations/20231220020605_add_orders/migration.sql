-- CreateTable
CREATE TABLE "Profiles" (
    "profileId" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT NOT NULL,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("profileId")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" SERIAL NOT NULL,
    "poNumber" TEXT NOT NULL,
    "stockNumber" TEXT NOT NULL,
    "workOrder" TEXT NOT NULL,
    "keyTag" TEXT NOT NULL,
    "vin" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "dos" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pod" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dod" TIMESTAMP(3) NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "type" TEXT NOT NULL,
    "requestorsFirstName" TEXT NOT NULL,
    "requestorsLastName" TEXT NOT NULL,
    "requestorsEmail" TEXT NOT NULL,
    "requestorsPhone" TEXT NOT NULL,
    "requestorsCompany" TEXT NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orderId")
);
