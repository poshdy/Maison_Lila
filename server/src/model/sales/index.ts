import { Product } from "@prisma/client";
import { prismadb } from "../../lib/prismadb.js";

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

export const ProductSales = async () => {
  const products = await GetProducts();


};



// async function CalculateProductRevenue(products) {
//   products.forEach(async (prod) => {
//     const totalQuantity = prod.orderItems.reduce((total, item) => {
//       return total + item.quantity;
//     }, 0);

//     const totalRevenue = totalQuantity * Number(prod.price);
//     return {
//       totalQuantity,
//       totalRevenue,
//     };
//   });
// }

export default async function GetProducts() {
  return await prismadb.product.findMany({
    select: {
      name: true,
      id: true,
      price: true,
      orderItems: {
        select: {
          quantity: true,
          productId: true,
        },
      },
    },
  });
}
export const TotalQuantitySold = async (productId) => {
  const product = await prismadb.orderItems.findMany({
    where: {
      productId,
    },
  });
  product.reduce((total: number, item) => {
    console.log("Total", total);
    console.log("Total", item.quantity);
    return total + item.quantity;
  }, 0);
};
// const messi = products.forEach((prod) => {
//   const totalQuanSold = prod.orderItems.reduce((acc: any, order) => {
//     acc + order.quantity;
//   }, 0);
//   const totalRevenueGenerated = prod.orderItems.reduce(
//     async (acc: any, order) => {
//       const p = await GetProduct(order.productId);
//       acc + p.price;
//     },
//     0
//   );

//   // console.log(`Product: ${prod.name}`);
//   // console.log(`Total Quantity Sold: ${totalQuanSold}`);
//   // console.log(`Total Revenue: $${totalRevenueGenerated}`);
//   // return {
//   //   prod,
//   //   totalQuanSold,
//   //   totalRevenueGenerated,
//   // };
// });
