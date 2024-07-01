/*
  Warnings:

  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_date` on the `Reservation` table. All the data in the column will be lost.
  - The required column `id` was added to the `Reservation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "name",
DROP COLUMN "reservation_date",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id");
