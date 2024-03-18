import GetProducts, {
  DailySales,
  ProductSales,
} from "../../model/sales/index.js";

export const GetDailySales = async () => {
  return await DailySales();
};

export const GetProductSales = async () => {
  const products = await GetProducts();
  products.forEach((prod) => {
    const totalQuantity = CalculateProductQuantity(prod);
    console.log(totalQuantity);
    // const totalRevenue = CalculateProductRevenue(prod, totalQuantity);
    // console.log(totalQuantity);

    return totalQuantity;
  });
};

const CalculateProductQuantity = (prod) => {
  return prod.orderItems.reduce((total: any, item) => {
    total + Number(item.quantity);
  }, 0);
};
const CalculateProductRevenue = (prod, quantity) => {
  return Number(prod.price) * quantity;
};
