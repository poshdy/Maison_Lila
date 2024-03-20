import { prismadb } from "../../lib/prismadb.js";

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

export const IsValid = async (couponCode) => {
  return await prismadb.coupon.findUnique({
    where: {
      couponCode,
      couponData: {
        valid: true,
      },
    },
  });
};

export const CanUseIt = async (userId: string, couponCode) => {
  return await prismadb.userCoupon.findFirst({
    where: {
      user: { id: userId },
      coupon: { couponCode },
    },
  });
};
export const UsedCoupons = async (userId: string, couponCode) => {
  return await prismadb.userCoupon.create({
    data: {
      user: { connect: { id: userId } },
      coupon: { connect: { couponCode } },
    },
  });
};
export const Increment = async (couponId) => {
  return await prismadb.couponData.update({
    where: {
      couponId,
    },
    data: {
      countUsed: { increment: 1 },
    },
  });
};

export const IsExpired = async () => {
  let currentDate = new Date();
  return await prismadb.couponData.updateMany({
    where: {
      expiration: {
        lte: currentDate,
      },
    },
    data: {
      valid: {
        set: false,
      },
    },
  });
};

export const FindCouponByName = async (couponCode: string) => {
  return await prismadb.coupon.findUnique({
    where: {
      couponCode,
    },
    include: {
      couponData: true,
    },
  });
};

export const UnVaildCoupon = async (couponCode) => {
  return await prismadb.coupon.update({
    where: {
      couponCode,
    },
    data: {
      couponData: {
        update: {
          valid: false,
        },
      },
    },
  });
};
