/*
  Warnings:

  - You are about to drop the column `discountValue` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `productAttribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `productAttribute` table. All the data in the column will be lost.
  - The required column `prod_atr_id` was added to the `productAttribute` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Sales_productId_idx";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "discountValue",
DROP COLUMN "stock";

-- AlterTable
ALTER TABLE "productAttribute" DROP CONSTRAINT "productAttribute_pkey",
DROP COLUMN "id",
ADD COLUMN     "prod_atr_id" TEXT NOT NULL,
ADD CONSTRAINT "productAttribute_pkey" PRIMARY KEY ("productId", "prod_atr_id");
