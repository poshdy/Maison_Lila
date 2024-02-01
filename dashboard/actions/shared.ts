import { Client } from "@/axiosClient";
import { format, parseISO } from "date-fns";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";

export const Publish = async (
  id: string,
  url: string,
  name: string,
  router: any
) => {
  try {
    const res = await Client.patch(`${url}/${id}`, {});
    toast.success(`${name} Published.`);
    router.refresh();
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};
export const changePosition = async (
  id: string,
  url: string,
  position: string,
  router: any
) => {
  try {
    const res = await Client.patch(`${url}/${id}`, { position: position });
    toast.success(`Position changed to ${position}`);
    router.refresh();
    return res.data;
  } catch (err: any) {
    console.log(err.message);
  }
};

export const onCopy = (id: string, name: string) => {
  navigator.clipboard.writeText(id);
  toast.success(`${name} ID copied to clipboard.`);
};

export const onConfirm = async (
  id: string,
  url: string,
  setLoading: any,
  setOpen: any,
  router: any
) => {
  try {
    setLoading(true);
    const re = await Client.delete(`${url}/${id}`);
    toast.success(`Item Deleted Successfully`);
    router.refresh();
  } catch (error: any) {
    toast.error(`SomeThing went Wrong`);
  } finally {
    setOpen(false);
    setLoading(false);
  }
};

export const Update = async (url: string, id: string | string[], data: any) => {
  await Client.patch(`${url}/${id}`, data);
};

export const Create = async (url: string, data: any) => {
  await Client.post(`${url}`, data);
};

export const onDelete = async (
  url: string,
  id: string | string[],
  router: AppRouterInstance,
  setOpen: any
) => {
  try {
    const re = await Client.delete(`${url}/${id}`);
    toast.success("Item Deleted Successfully");
    router.refresh();
  } catch (error: any) {
    toast.error(
      "Make sure you removed all categories using this billboard first."
    );
  } finally {
    setOpen(false);
  }
};

export const DATE = (createdAt: string) => {
  const formattedDate = format(parseISO(createdAt), "PPP");
  return formattedDate;
};
