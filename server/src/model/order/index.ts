import { prismadb } from "../../lib/prismadb.js";

export const Create = async (data) => {
  const {
    userId,
    addressId,
    phone,
    comment,
    orderItems,
    Subtotal,
    OrderTotal,
    Discount,
    DeliveryFee,
  } = data;

  return await prismadb.order.create({
    data: {
      phoneNumber: phone,
      comment,
      user: { connect: { id: userId } },
      Address: { connect: { id: addressId } },
      orderStatus: "PENDING",
      OrderItems: {
        createMany: {
          data: orderItems,
        },
      },
      OrderSummary: {
        create: {
          Subtotal,
          Discount,
          paymentMethod: "CASH",
          DeliveryFee,
          OrderTotal,
        },
      },
    },
  });
};
export const Find = async () => {
  return await prismadb.order.findMany({
    include: {
      OrderItems: {
        include: {
          Product: {
            include: {
              image: true,
            },
          },
        },
      },
      OrderSummary: true,
      user: {
        select: {
          email: true,
          id: true,
          name: true,
        },
      },
      Address: {
        select: {
          BuildingNo: true,
          apartmentNo: true,
          Floor: true,
          streetName: true,
          zone: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
};
export const FindById = async (id: string) => {
  return await prismadb.order.findUnique({
    where: {
      id,
    },
    include: {
      OrderItems: {
        include: {
          Product: {
            include: {
              image: true,
            },
          },
        },
      },
      OrderSummary: true,
      user: {
        select: {
          email: true,
          id: true,
          name: true,
        },
      },
      Address: {
        select: {
          BuildingNo: true,
          apartmentNo: true,
          Floor: true,
          streetName: true,
          zone: {
            select: {
              name: true,
              fees: true,
            },
          },
        },
      },
    },
  });
};
export const Update = async (id: string, status) => {
  return await prismadb.order.update({
    where: {
      id,
    },
    data: {
      orderStatus: {
        set: status,
      },
    },
  });
};
