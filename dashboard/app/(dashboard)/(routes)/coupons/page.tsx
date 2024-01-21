import CouponClient from "@/components/PageComponents/coupon/client";
import { CouponColumn } from "@/types";
import { getData } from "@/fetchers";
import { DATE } from "@/actions/shared";

const CouponsPage = async () => {
  const data = await getData("/coupon");
  const formattedCoupon: CouponColumn[] | null = data?.map(
    (item: CouponColumn) => ({
      id: item?.id,
      name: item?.name,
      amount: item?.amount,
      valid: item?.valid,
      countUsed: item.countUsed,
      minimum: item?.Minimum,
      maxUsage: item?.maxUsage,
      createdAt: DATE(item?.createdAt),
      expiration: DATE(item?.expiration),
    })
  );
  return (
    <section>
      <div className="space-y-10">
        {formattedCoupon && <CouponClient data={formattedCoupon} />}
      </div>
    </section>
  );
};

export default CouponsPage;
