import { prismadb } from "../../lib/prismadb.js";

export const UsersCount = async () => {
  return await prismadb.user.count({
    where: {
      role: "USER",
    },
  });
};

export const OrdersCount = async () => {
  const Delivered = await prismadb.order.count({
    where: {
      orderStatus: {
        equals: "DELIVERED",
      },
    },
  });

  const Proccessing = await prismadb.order.count({
    where: {
      orderStatus: {
        equals: "CONFIRMED",
      },
    },
  });
  const Pending = await prismadb.order.count({
    where: {
      orderStatus: {
        equals: "PENDING",
      },
    },
  });
  return {
    Pending,
    Proccessing,
    Delivered,
  };
};

export const GetProductByName = async (query) => {
  console.log(query);
  return await prismadb.product.findMany({
    where: {
      OR: [
        { name: { contains: query as string } },
        { category: { name: { contains: query as string } } },
      ],
    },
    include: {
      image: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};

export const ProductsCount = async () => {
  const total = await prismadb.product.count();
  const inStock = await prismadb.productInventory.count({
    where: {
      soldOut: false,
    },
  });
  const outOfStock = await prismadb.productInventory.count({
    where: {
      soldOut: true,
    },
  });
  return {
    total,
    inStock,
    outOfStock,
  };
};

export const Zones = async () => {
  const orders = await prismadb.order.findMany({
    select: {
      Address: {
        select: {
          zone: true,
        },
      },
    },
  });
  const Zones = await prismadb.zone.findMany({
    include: {
      Address: {
        include: {
          Order: true,
        },
      },
    },
  });

  const ordersByZone = {};

  orders.forEach((order) => {
    const zoneName = order.Address.zone.name;
    ordersByZone[zoneName] = (ordersByZone[zoneName] || 0) + 1;
  });
  const ordersCountArray = Object.keys(ordersByZone).map((zoneName) => ({
    zoneName,
    orderCount: ordersByZone[zoneName],
  }));

  return ordersCountArray;

  // const mess = Zones.map((z) => z.Address.map((aa) => aa.Order.length));
  // const zones = orders.reduce((total, order) => {
  //   const zonebyorder = order.Address.zone.id;
  //   const zoneId = zonebyorder;
  //   total[zoneId] = (total[zoneId] || 0) + 1;
  //   return total;
  // }, {});
};
