/*
  Warnings:

  - You are about to drop the column `recommeded` on the `productAttribute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "productAttribute" DROP COLUMN "recommeded",
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;
