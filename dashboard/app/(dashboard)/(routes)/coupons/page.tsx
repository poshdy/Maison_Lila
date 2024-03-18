import CouponClient from "@/components/PageComponents/coupon/client";
import { CouponColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";

const CouponsPage = async () => {
  const data = await getData("/coupon");
  const formattedCoupon: CouponColumn[] | null = data?.map(
    (item: CouponColumn) => ({
      id: item?.id,
      couponCode: item?.couponCode,
      amount: item?.discountAmount,
      valid: item?.couponData.valid,
      countUsed: item.couponData.countUsed,
      minimum: item?.minimumAmount,
      maxUsage: item?.couponData.limit,
      createdAt: DATE(item?.createdAt),
      expiration: DATE(item?.couponData.expiration),
    })
  );
  return (
    <Wrapper>
      {formattedCoupon && <CouponClient data={formattedCoupon} />}
    </Wrapper>
  );
};

export default CouponsPage;
