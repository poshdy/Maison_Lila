import { prismadb } from "../lib/prismadb.js";

export const InsertINtoSales = async (orderItems: any) => {
  const singlePro = orderItems.map((o: any) => {
    return prismadb.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { id: o.productId },
      });

      if (!product) {
        throw new Error("Product not found");
      }

      // Calculate total price based on quantity and product price
      const totalPrice = await CalculateTotalPrice(o.quantity, product.price);

      const checkSales = await tx.sales.findUnique({
        where: {
          productId: o.productId,
        },
      });

      // check if the products already in sales if exists we will update the quan sold and rev else create a new record
      if (checkSales) {
        await tx.sales.update({
          where: {
            productId: o.productId,
          },
          data: {
            quantitySold: { increment: o.quantity },
            Revenue: { increment: Number(totalPrice) },
            price: +product.price,
            soldAt: totalPrice,
          },
        });
      }
      if (!checkSales) {
        await tx.sales.create({
          data: {
            productId: o.productId,
            quantitySold: o.quantity,
            Revenue: totalPrice,
            price: product.price,
            soldAt: totalPrice,
          },
        });
      }

      await tx.productInventory.update({
        where: {
          id: o.productId,
        },
        data: {
          stock: {
            decrement: +o.quantity,
          },
        },
      });
    });

    // You can also update the product stock or perform other actions here
  });
};

const CalculateTotalPrice = async (quan: number | string, price: any) => {
  return +quan * +price;
};
export const getTotalSales = async () => {
  const sales = await prismadb.sales.aggregate({
    _sum: {
      Revenue: true,
    },
  });
  return sales;
};
