import { CouponColumn } from "@/types";
import * as z from "zod";

export const AnounSchema = z.object({
  text: z.string(),
});
export type AnounFormValues = z.infer<typeof AnounSchema>;
export const BannerSchema = z.object({
  text: z.string(),
  image: z.string(),
  title: z.string(),
});
export type BannerFormValues = z.infer<typeof BannerSchema>;
export const BottomImageSchema = z.object({
  text: z.string(),
  image: z.string(),
  title: z.string(),
});
export type BottomImageFormValues = z.infer<typeof BottomImageSchema>;

export const ZoneSchema = z.object({
  name: z.string(),
  fees: z.string(),
});

export type ZoneFormValues = z.infer<typeof ZoneSchema>;
export const ContactSchema = z.object({
  phone: z.string(),
  email: z.string(),
  tiktok: z.string(),
  instagram: z.string(),
  facebook: z.string(),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;

export const SliderSchema = z.object({
  name: z.string().min(1),
  place: z.string(),
});
export const SliderContentSchema = z.object({
  text: z.string().min(1),
  title: z.string(),
  image: z.string(),
  sliderId: z.string(),
});
export type SliderFormValues = z.infer<typeof SliderSchema>;
export type SliderContentFormValues = z.infer<typeof SliderContentSchema>;

export const CategorySchema = z.object({
  name: z.string().min(1),
  imageUrl: z.string().min(1),
  subId: z.string().optional(),
});

export type CategoryFormValues = z.infer<typeof CategorySchema>;

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  stock: z.coerce.number().optional(),
  categoryId: z.string(),
  image: z.object({ url: z.string() }).array(),
  discountValue: z.string().optional(),
});
export type ProductFormValues = z.infer<typeof productSchema>;
export const productSubCatSchema = z.object({
  SubCategoryId: z.string(),
});
export type productSubCatFormValues = z.infer<typeof productSubCatSchema>;
export type RestockFormValues = z.infer<typeof RestockSchema>;
export const RestockSchema = z.object({
  restock: z.number(),
});

export const CouponSchema = z.object({
  name: z.string().optional(),
  amount: z.coerce.number().optional(),
  decription: z.string().optional(),
  Minimum: z.coerce.number().optional(),
  expiration: z.date().optional(),
  maxUsage: z.coerce.number().optional(),
});

export type CouponFormValues = z.infer<typeof CouponSchema>;

export const StatusSchema = z.object({
  status: z.string(),
});
export type StatusFormValues = z.infer<typeof StatusSchema>;
export const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});
