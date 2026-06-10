/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cabins` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL,
    "cabinId" TEXT NOT NULL,
    "guestName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numGuests" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" SERIAL NOT NULL,
    "minBookingLength" INTEGER NOT NULL DEFAULT 1,
    "maxBookingLength" INTEGER NOT NULL DEFAULT 90,
    "maxGuestsPerBooking" INTEGER NOT NULL DEFAULT 10,
    "breakfastPrice" DOUBLE PRECISION NOT NULL DEFAULT 15,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "bookings_cabinId_idx" ON "bookings"("cabinId");

-- CreateIndex
CREATE INDEX "bookings_startDate_endDate_idx" ON "bookings"("startDate", "endDate");

-- CreateIndex
CREATE UNIQUE INDEX "cabins_name_key" ON "cabins"("name");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_cabinId_fkey" FOREIGN KEY ("cabinId") REFERENCES "cabins"("id") ON DELETE CASCADE ON UPDATE CASCADE;
