import z from "zod";

export const CustomziedSchema = z.object({
  name: z.string().min(1, "Name must contains atleast one character"),
  email: z.string().email(),
  phone: z.string(),
  image: z.string(),
  message: z.string().max(100),
});

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

export const SearchSchema = z.object({
  query: z.string(),
});
export const OrderSchema = z.object({
  phone: z.string().length(11),
  paymentMethod: z.string().optional(),
  comment: z.string().optional(),
});

export const ReviewSchema = z.object({
  content: z.string(),
  rating: z.string(),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Please Provide a Vaild Email" }),
  name: z.string().min(1, "Name must atleast contains 1 character "),
  password: z.string().min(6, "Password must atleast contains 6 characters"),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Please Provide a Vaild Email" }),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
export type SignUpFormValues = z.infer<typeof SignUpSchema>;
export type ReviewFormValues = z.infer<typeof ReviewSchema>;
export type OrderFormValues = z.infer<typeof OrderSchema>;
export type CouponFormValue = z.infer<typeof couponSchema>;
export type AddressFormValue = z.infer<typeof AddressSchema>;
export type CustomziedFormValues = z.infer<typeof CustomziedSchema>;
