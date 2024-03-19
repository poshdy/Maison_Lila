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
  const zones = await prismadb.zone.findMany({
    include: {
      Address: true,
    },
  });
  const zoneFees = {};
  zones.forEach((zone) => {
    zoneFees[zone.name] = zone.fees;
  });
  const zoneOrdersAndRevenue = zones.map((zone) => {
    const ordersPlacedInZone = orders.filter(
      (order) => order.Address.zone.id === zone.id
    ).length;
    const revenue = ordersPlacedInZone * zoneFees[zone.name];
    return {
      zone: zone.name,
      ordersPlaced: ordersPlacedInZone,
      revenue: revenue,
    };
  });
  return zoneOrdersAndRevenue;
};

export const CouponStats = async () => {
  return await prismadb.userCoupon.findMany({
    select: {
      createdAt: true,
      user: {
        select: {
          email: true,
        },
      },
      coupon: {
        select: {
          couponCode: true,
        },
      },
      uses: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};
