/*
  Warnings:

  - You are about to drop the `BlackList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Coupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BlackList" DROP CONSTRAINT "BlackList_couponCode_fkey";

-- DropForeignKey
ALTER TABLE "BlackList" DROP CONSTRAINT "BlackList_userId_fkey";

-- DropTable
DROP TABLE "BlackList";

-- DropTable
DROP TABLE "Coupons";

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "couponCode" TEXT NOT NULL,
    "discountAmount" INTEGER NOT NULL DEFAULT 20,
    "minimumAmount" INTEGER NOT NULL DEFAULT 100,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "couponData" (
    "id" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,
    "expiration" TIMESTAMP(3) NOT NULL,
    "limit" INTEGER NOT NULL DEFAULT 100,
    "valid" BOOLEAN NOT NULL DEFAULT false,
    "countUsed" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "couponData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userCoupon" (
    "id" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "uses" INTEGER NOT NULL DEFAULT 0,
    "canRedeem" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userCoupon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_couponCode_key" ON "Coupon"("couponCode");

-- CreateIndex
CREATE UNIQUE INDEX "couponData_couponId_key" ON "couponData"("couponId");

-- AddForeignKey
ALTER TABLE "couponData" ADD CONSTRAINT "couponData_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
