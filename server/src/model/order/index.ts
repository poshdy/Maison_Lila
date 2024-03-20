import { OrderItems } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";
import { AppError } from "../../utils/AppError.js";

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
    orderBy: { createdAt: "desc" },
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

export const OrderQuantity = async (orderItems: OrderItems[]) => {
  await prismadb.$transaction(async (tx) => {
    for (const orderItem of orderItems) {
      const { productId, quantity } = orderItem;
      console.log(quantity, productId);
      const product = await tx.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          productInventory: true,
        },
      });

      if (product?.productInventory.soldOut === true) {
        throw new AppError(
          `Sorry ${product.name} is currently out of stock`,
          `Sorry ${product.name} is currently out of stock`,
          400
        );
      }
      if (Number(product?.productInventory.stock) < quantity) {
        throw new AppError(
          `Sorry we only have ${product?.productInventory.stock} from ${product?.name}`,
          `Sorry we only have ${product?.productInventory.stock} from ${product?.name}`,
          400
        );
      }
    }
  });
};
