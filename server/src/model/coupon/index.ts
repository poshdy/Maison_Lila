import { prismadb } from "../../lib/prismadb.js";
import { AppError } from "../../utils/AppError.js";

export const Create = async (data) => {
  const { couponCode, discountAmount, minimumAmount, expiration, limit } = data;
  return await prismadb.$transaction(async (tx) => {
    const coupon = await tx.coupon.create({
      data: {
        couponCode,
        discountAmount,
        minimumAmount,
      },
    });
    const couponData = await tx.couponData.create({
      data: {
        couponId: coupon.id,
        expiration,
        limit,
      },
    });
  });
};
export const Find = async () => {
  return await prismadb.coupon.findMany({
    select: {
      id: true,
      couponCode: true,
      discountAmount: true,
      minimumAmount: true,
      createdAt: true,
      couponData: {
        select: {
          limit: true,
          expiration: true,
          countUsed: true,
          valid: true,
        },
      },
    },
  });
};
export const FindById = async (id: string) => {
  return await prismadb.coupon.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      createdAt: true,
      couponCode: true,
      discountAmount: true,
      minimumAmount: true,
      couponData: {
        select: {
          limit: true,
          expiration: true,
          countUsed: true,
          valid: true,
        },
      },
    },
  });
};
export const Update = async (id: string, data) => {
  const {
    couponCode,
    discountAmount,
    minimumAmount,
    expiration,
    limit,
    valid,
  } = data;
  return await prismadb.$transaction(async (tx) => {
    await tx.coupon.update({
      where: {
        id,
      },
      data: {
        couponCode,
        discountAmount,
        minimumAmount,
      },
    });
    await tx.couponData.update({
      where: {
        couponId: id,
      },
      data: {
        limit,
        expiration,
        valid,
      },
    });
  });
};
export const Delete = async (id: string) => {
  return await prismadb.coupon.delete({
    where: {
      id,
    },
  });
};

export const IsNameExist = async (couponCode) => {
  return await prismadb.coupon.findUnique({
    where: {
      couponCode,
    },
  });
};
