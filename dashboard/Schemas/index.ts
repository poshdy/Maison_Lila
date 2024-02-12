import * as z from "zod";

export type ProductFormValues = z.infer<typeof productSchema>;
export type productSubCatFormValues = z.infer<typeof productSubCatSchema>;
export type RestockFormValues = z.infer<typeof RestockSchema>;
export type CouponFormValues = z.infer<typeof CouponSchema>;
export type StatusFormValues = z.infer<typeof StatusSchema>;
export type CategoryFormValues = z.infer<typeof CategorySchema>;
export type SliderFormValues = z.infer<typeof SliderSchema>;
export type SliderContentFormValues = z.infer<typeof SliderContentSchema>;
export type ContactFormValues = z.infer<typeof ContactSchema>;
export type ZoneFormValues = z.infer<typeof ZoneSchema>;
export type BottomImageFormValues = z.infer<typeof BottomImageSchema>;
export type BannerFormValues = z.infer<typeof BannerSchema>;
export type AnounFormValues = z.infer<typeof AnounSchema>;
export type SubCategoryFormValues = z.infer<typeof SubCategorySchema>;

export const AnounSchema = z.object({
  text: z.string().min(6, "Anouncement must be atleast 6 characters"),
});
export const ZoneSchema = z.object({
  name: z.string().min(1, "zone name must contains atleast one character"),
  fees: z.coerce.number(),
});
export const BannerSchema = z.object({
  text: z.string().min(1, "text must contains atleast one character"),
  image: z.string(),
  title: z.string().min(1, "title must contains atleast one character"),
});

export const BottomImageSchema = z.object({
  text: z.string().min(1, "text must contains atleast one character"),
  image: z.string(),
  title: z.string().min(1, "title must contains atleast one character"),
});

export const ContactSchema = z.object({
  phone: z.string(),
  email: z.string(),
  tiktok: z.string(),
  instagram: z.string(),
  facebook: z.string(),
});

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

export const CategorySchema = z.object({
  name: z.string().min(1, "category name must contains atleast one character"),
  imageUrl: z.string().min(1, "image cannot be empty"),
  subId: z.string().optional(),
});

export const productSchema = z.object({
  name: z.string().min(1, "Product name must contains atleast one character"),
  description: z
    .string()
    .min(1, "Description must contains atleast one character"),
  price: z.string().min(1, "Price Required"),
  stock: z.coerce.number().optional(),
  categoryId: z.string().min(1, "Category Required"),
  image: z.object({ url: z.string() }).array(),
  discountValue: z.string().optional(),
});

export const productSubCatSchema = z.object({
  SubCategoryId: z.string(),
});

export const RestockSchema = z.object({
  restock: z.number(),
});

export const CouponSchema = z.object({
  name: z.string().min(1, "Coupon name must contains atleast one character"),
  amount: z.coerce.number(),
  decription: z.string().min(1, "desc must contains atleast one character"),
  Minimum: z.coerce.number(),
  expiration: z.coerce.date().optional(),
  maxUsage: z.coerce.number(),
});

export const StatusSchema = z.object({
  status: z.string(),
});
export const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export const SubCategorySchema = z.object({
  name: z
    .string()
    .min(1, "Sub-Category name must contains atleast one character"),
  categoryId: z.string().min(1, "category is missing"),
});
