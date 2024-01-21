import React from "react";

import { getDataById } from "@/fetchers";
import {CouponForm} from "../../../../../components/Forms/CouponForm";

const CouponPage = async ({ params }: { params: { couponId: string } }) => {
  console.log(params.couponId);
  const coupon = await getDataById("/coupon", params.couponId);

  return (
    <div className="flex-col">
      <div className="space-y-4">
        <CouponForm initialData={coupon} />
      </div>
    </div>
  );
};

export default CouponPage;
