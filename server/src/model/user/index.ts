import { prismadb } from "../../lib/prismadb.js";

export const FindUserOrders = async (id: string) => {
  return await prismadb.user.findMany({
    where: {
      id,
    },
    select: {
      order: {
        select: {
          OrderItems: true,
          Address: {
            select: {
              zone: true,
              city: true,
              BuildingNo: true,
              apartmentNo: true,
              Floor: true,
              streetName: true,
            },
          },
          orderStatus: true,
          OrderSummary: true,
          user: true,
          createdAt: true,
        },
      },
      name: true,
      email: true,
      id: true,
    },
  });
};
export const FindUserAddress = async (id: string) => {
  return await prismadb.address.findMany({
    where: {
      userId: id,
    },
    include: {
      zone: true,
      User: {
        select: {
          id: true,
        },
      },
    },
  });
};
