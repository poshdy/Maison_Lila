import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {format,parseISO} from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedPrice = (price: number) => {
  const p = new Intl.NumberFormat("en-US", {
    currency: "EGP",
    style: "currency",
  }).format(price);

  return p;
};


export const DATE = (createdAt: string) => {
  const formattedDate = format(parseISO(createdAt), "PPP");
  return formattedDate;
};

