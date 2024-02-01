import { Client } from "@/axiosClient";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export const ProductAttributes = async (
  id: string,
  term: string,
  router: AppRouterInstance
) => {
  try {
    const res = await Client.patch(`/product/best-seller/${id}`, { term });
    toast.success(`Product Updated to ${term}`);
    console.log(res.data);
    router.refresh();
  } catch (error: any) {
    console.log(error.message);
  }
};
export const Restock = async (id: string, router: AppRouterInstance) => {
  try {
    const res = await Client.patch(`/product/restock/${id}`, { restock: 10 });
    toast.success(`Product Restocked`);
    router.refresh();
  } catch (error: any) {
    console.log(error.message);
  }
};
