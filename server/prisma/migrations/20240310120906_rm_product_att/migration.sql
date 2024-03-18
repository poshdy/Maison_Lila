/*
  Warnings:

  - You are about to drop the column `SoldOut` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `bestSeller` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `newArrival` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "SoldOut",
DROP COLUMN "bestSeller",
DROP COLUMN "featured",
DROP COLUMN "newArrival";
