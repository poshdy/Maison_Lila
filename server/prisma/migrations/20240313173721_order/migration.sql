/*
  Warnings:

  - The values [DELIVERD] on the enum `OrderStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `updatedAt` on the `OrderItems` table. All the data in the column will be lost.
  - You are about to alter the column `DeliveryFee` on the `OrderSummary` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OrderStatus_new" AS ENUM ('PENDING', 'CONFIRMED', 'DELIVERED');
ALTER TABLE "Order" ALTER COLUMN "orderStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "orderStatus" TYPE "OrderStatus_new" USING ("orderStatus"::text::"OrderStatus_new");
ALTER TYPE "OrderStatus" RENAME TO "OrderStatus_old";
ALTER TYPE "OrderStatus_new" RENAME TO "OrderStatus";
DROP TYPE "OrderStatus_old";
ALTER TABLE "Order" ALTER COLUMN "orderStatus" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_orderSummaryId_fkey";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "orderSummaryId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "OrderItems" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "OrderSummary" ALTER COLUMN "DeliveryFee" SET DATA TYPE INTEGER;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_orderSummaryId_fkey" FOREIGN KEY ("orderSummaryId") REFERENCES "OrderSummary"("id") ON DELETE CASCADE ON UPDATE CASCADE;
