import z from "zod";

export const CustomziedSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  image: z.string(),
  message: z.string(),
});

export type CustomziedFormValues = z.infer<typeof CustomziedSchema>;

export const couponSchema = z.object({
  name: z.string(),
});
export const AddressSchema = z.object({
  apartmentNo: z.string(),
  zoneId: z.string(),
  BuildingNo: z.string(),
  Floor: z.string(),
  streetName: z.string(),
});

export type CouponFormValue = z.infer<typeof couponSchema>;
export type AddressFormValue = z.infer<typeof AddressSchema>;
export const SearchSchema = z.object({
  query: z.string(),
});
export const OrderSchema = z.object({
  phone: z.string().length(11),
  paymentMethod: z.string().optional(),
  comment: z.string().optional(),
});

export type OrderFormValues = z.infer<typeof OrderSchema>;

export const ReviewSchema = z.object({
  content: z.string(),
  rating: z.string(),
});

export type ReviewFormValues = z.infer<typeof ReviewSchema>;
