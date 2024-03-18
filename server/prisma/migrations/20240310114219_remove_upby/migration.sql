/*
  Warnings:

  - You are about to drop the `UpdatedBy` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UpdatedBy" DROP CONSTRAINT "UpdatedBy_productId_fkey";

-- DropTable
DROP TABLE "UpdatedBy";

-- CreateTable
CREATE TABLE "productInventory" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 10,
    "soldOut" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "productInventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productAttribute" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "bestSeller" BOOLEAN NOT NULL DEFAULT false,
    "newArrival" BOOLEAN NOT NULL DEFAULT false,
    "recommeded" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "productAttribute_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productAttribute" ADD CONSTRAINT "productAttribute_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
