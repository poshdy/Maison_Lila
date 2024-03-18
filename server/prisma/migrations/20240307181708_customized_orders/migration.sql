/*
  Warnings:

  - You are about to drop the `SpecialOrder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SpecialOrder";

-- CreateTable
CREATE TABLE "CustomizedOrder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomizedOrder_pkey" PRIMARY KEY ("id")
);
