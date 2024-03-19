import { OrderItems } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";
import { CalculateOrderPrice } from "../../services/sales/index.js";

type saleData = {
  productId: string;
  quantitySold: number;
  orderPrice: number;
  soldAtPrice: any;
};

export const DailySales = async () => {
  const order = await prismadb.order.findMany({
    select: {
      createdAt: true,
      OrderSummary: {
        select: {
          OrderTotal: true,
        },
      },
    },
  });
  const dailySales = order.reduce((acc, order) => {
    const date = order.createdAt.toISOString().split("T")[0];
    acc[date] = (acc[date] || 0) + order.OrderSummary.OrderTotal;
    console.log(acc);
    return acc;
  }, 0);
  return dailySales;
};

export const InsertSale = async (orderItems: OrderItems[]) => {
  orderItems.map(async (item) => {
    return await prismadb.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: item.productId },
      });
      const soldAtPrice =
        +product?.salePrice > 0 ? product.salePrice : product.price;
      const orderPrice = await CalculateOrderPrice(+soldAtPrice, item.quantity);
      const data = {
        productId: product.id,
        quantitySold: item?.quantity,
        orderPrice,
        soldAtPrice,
      };
      await IsProductExist(tx, data);
    });
  });
};

async function IsProductExist(tx, data: saleData) {
  const { productId, orderPrice, quantitySold, soldAtPrice } = data;
  return await tx.sales.upsert({
    update: {
      quantitySold: { increment: quantitySold },
      Revenue: { increment: Number(orderPrice) },
      price: soldAtPrice,
    },
    create: {
      productId,
      quantitySold,
      Revenue: orderPrice,
      price: soldAtPrice,
    },
    where: {
      productId: data.productId,
    },
  });
}

export const GetSales = async () => {
  return await prismadb.sales.findMany({
    select: {
      price: true,
      Revenue: true,
      createdAt: true,
      quantitySold: true,
      product: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
};
