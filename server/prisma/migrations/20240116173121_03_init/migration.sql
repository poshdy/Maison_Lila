/*
  Warnings:

  - You are about to drop the column `zoneId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `zoneId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_zoneId_fkey";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "zoneId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "zoneId";

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
