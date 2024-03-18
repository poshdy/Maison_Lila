-- DropForeignKey
ALTER TABLE "couponData" DROP CONSTRAINT "couponData_couponId_fkey";

-- DropForeignKey
ALTER TABLE "userCoupon" DROP CONSTRAINT "userCoupon_couponId_fkey";

-- DropForeignKey
ALTER TABLE "userCoupon" DROP CONSTRAINT "userCoupon_userId_fkey";

-- AddForeignKey
ALTER TABLE "couponData" ADD CONSTRAINT "couponData_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userCoupon" ADD CONSTRAINT "userCoupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
