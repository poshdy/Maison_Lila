/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Zone` table. All the data in the column will be lost.
  - You are about to drop the `userUsedCoupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userUsedCoupons" DROP CONSTRAINT "userUsedCoupons_couponsId_fkey";

-- DropForeignKey
ALTER TABLE "userUsedCoupons" DROP CONSTRAINT "userUsedCoupons_userId_fkey";

-- AlterTable
ALTER TABLE "Zone" DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "userUsedCoupons";
