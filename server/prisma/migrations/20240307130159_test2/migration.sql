-- CreateTable
CREATE TABLE "userUsedCoupons" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "couponId" TEXT NOT NULL,
    "couponsId" TEXT NOT NULL,

    CONSTRAINT "userUsedCoupons_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userUsedCoupons" ADD CONSTRAINT "userUsedCoupons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userUsedCoupons" ADD CONSTRAINT "userUsedCoupons_couponsId_fkey" FOREIGN KEY ("couponsId") REFERENCES "Coupons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
