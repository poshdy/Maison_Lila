import { IsValid, CanUseIt, UsedCoupons } from "../../model/coupon/index.js";
import { Create, Find, FindById, Update } from "../../model/order/index.js";
import { Coupon } from "../../pub/coupon.js";
import { AppError } from "../../utils/AppError.js";

export const CreateOrder = async (data) => {
  return await Create(data);
};
export const GetOrders = async () => {
  return await Find();
};
export const GetOrder = async (id: string) => {
  return await FindById(id);
};
export const UpdateOrderStatus = async (id: string, status) => {
  return await Update(id, status);
};

export const ApplyCoupon = async (
  couponCode: string,
  orderTotal: number,
  userId: string
) => {
  const coupon = await IsValid(couponCode);
  if (!coupon) {
    throw new AppError(
      "this coupon is not vaild",
      "this coupon is not vaild",
      400
    );
  }
  if (coupon.minimumAmount > orderTotal) {
    throw new AppError(
      `Please add ${orderTotal - coupon.minimumAmount} to use coupon`,
      "doesn't reach minimum amount",
      400
    );
  }
  const user = await CanUseIt(userId, couponCode);

  // if (!user?.canRedeem) {
  //   throw new AppError(`Sorry You Already Used This Coupon`, "", 400);
  // }

  await UsedCoupons(userId, couponCode);
  Coupon.emit("increment", coupon.id);
  return coupon.discountAmount;
};
