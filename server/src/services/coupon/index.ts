import {
  Create,
  Delete,
  Find,
  FindById,
  IsNameExist,
  Update,
} from "../../model/coupon/index.js";
import { AppError } from "../../utils/AppError.js";

export const CreateCoupon = async (data) => {
  const exist = await IsExisted(data.couponCode);
  if (exist) {
    throw new AppError("validtion", "This Coupon Name is Already Existed", 400);
  }
  return await Create(data);
};

export const GetCoupons = async () => {
  return await Find();
};
export const GetCoupon = async (id: string) => {
  return await FindById(id);
};

export const UpdateCoupon = async (id: string, data) => {
  return await Update(id, data);
};
export const DeleteCoupon = async (id: string) => {
  return await Delete(id);
};
// export const IncrementCount = async (couponName: string) => {
//   return await prismadb.coupons.update({
//     where: {
//       name: couponName,
//     },
//     data: {
//       countUsed: { increment: 1 },
//     },
//   });
// };

// export const checkCount = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const coupon = await prismadb.coupons.findUnique({
//     where: {
//       name: req.body.coupon,
//     },
//   });

//   if (coupon?.countUsed == coupon?.maxUsage) {
//     await prismadb.coupons.update({
//       where: {
//         name: req.body.coupon,
//       },
//       data: {
//         valid: { set: false },
//       },
//     });
//     return res.status(400).send(`${coupon?.name} has expired`);
//   }
//   if (coupon?.valid === false) {
//     return res.status(200).send("this coupon has expired");
//   }
//   console.log(`${coupon.name}:used ${coupon.countUsed}`);

//   next();
// };

// export const Expiration = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     let currentDate = new Date();
//     const coupons = await prismadb.coupons.updateMany({
//       where: {
//         expiration: {
//           lte: currentDate,
//         },
//       },
//       data: {
//         valid: {
//           set: false,
//         },
//       },
//     });
//     next();
//   } catch (error) {
//     console.log("");
//   }
// };

// export const IsUsedBefore = async (couponName: string, userId: string) => {
//   return await prismadb.blackList.findFirst({
//     where: {
//       user: { id: userId },
//       coupon: { name: couponName },
//     },
//   });
// };

// export const addCouponToBlackList = async (
//   couponName: string,
//   userId: string
// ) => {
//   return await prismadb.blackList.create({
//     data: {
//       user: {
//         connect: { id: userId },
//       },
//       coupon: { connect: { name: couponName } },
//     },
//   });
// };

export const IsExisted = async (couponCode: string) => {
  return await IsNameExist(couponCode);
};
