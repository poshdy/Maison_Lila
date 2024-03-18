/*
  Warnings:

  - The primary key for the `productAttribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[productId]` on the table `productAttribute` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Product_id_name_idx";

-- AlterTable
ALTER TABLE "productAttribute" DROP CONSTRAINT "productAttribute_pkey",
ADD CONSTRAINT "productAttribute_pkey" PRIMARY KEY ("prod_atr_id");

-- CreateIndex
CREATE UNIQUE INDEX "productAttribute_productId_key" ON "productAttribute"("productId");
