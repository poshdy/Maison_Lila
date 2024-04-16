import { OrderItems } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";
import { CalculateOrderPrice } from "../../services/sales/index.js";
type saleData = {
  productId: string;
  quantitySold: number;
  orderPrice: number;
  soldAtPrice: any;
};
const GetOrders = async () => {
  const orders = await prismadb.order.findMany({
    include: {
      OrderSummary: {
        select: {
          OrderTotal: true,
        },
      },
    },
  });
  return orders;
};

function formatNumber(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  }).format(number);
}
export const DailySales = async () => {
  return "hi";
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
export const TotalSales = async () => {
  const total = await prismadb.orderSummary.aggregate({
    _sum: {
      OrderTotal: true,
    },
  });
  return total
};
