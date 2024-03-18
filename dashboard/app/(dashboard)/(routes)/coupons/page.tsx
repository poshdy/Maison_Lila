import CouponClient from "@/components/PageComponents/coupon/client";
import { CouponColumn, CouponStats } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";
import Wrapper from "@/components/ui/wrapper";
import { columns } from "@/components/PageComponents/coupon/coupon-stats-coupon";
import { DataTable } from "@/components/ui/data-table";
import Heading from "@/components/ui/heading";

const CouponsPage = async () => {
  const data = await getData("/coupon");
  const couponStats = await getData("/stats/coupons");
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
  const formattedCouponStats: CouponStats[] = couponStats?.map(
    (item: CouponStats) => ({
      couponCode: item?.coupon.couponCode,
      email: item?.user.email,
    })
  );
  return (
    <Wrapper>
      {formattedCoupon && <CouponClient data={formattedCoupon} />}

      <Heading className="text-3xl" title="Used Coupons" />
      <DataTable
        searchKey="name"
        columns={columns}
        data={formattedCouponStats}
      />
    </Wrapper>
  );
};

export default CouponsPage;
