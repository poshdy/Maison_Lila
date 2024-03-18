import {
  Create,
  Delete,
  Find,
  FindById,
  Increment,
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
export const IsExisted = async (couponCode: string) => {
  return await IsNameExist(couponCode);
};

export const IncrementCount = async (couponId: string) => {
  return await Increment(couponId);
};

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

