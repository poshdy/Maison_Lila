import Joi from "joi";

export const AuthSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(20).required(),
  name: Joi.string().optional(),
});
export const ZoneSchema = Joi.object({
  name: Joi.string(),
  fees: Joi.number(),
});
export const BottomImageSchema = Joi.object({
  text: Joi.string().required(),
  title: Joi.string().required(),
  image: Joi.string().required(),
});

export const ProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  stock: Joi.number().default(10).optional(),
  discountValue: Joi.number().optional(),
  categoryId: Joi.string().required(),
  image: Joi.array().items(
    Joi.object({
      url: Joi.string(),
    })
  ),
});
export const SliderSchema = Joi.object({
  name: Joi.string().required(),
  place: Joi.string().required(),
});
export const BannerSchema = Joi.object({
  text: Joi.string().required(),
  image: Joi.string().required(),
  title: Joi.string().required(),
  action: Joi.string().optional(),
  location: Joi.string().optional(),
});
export const AnouncementSchema = Joi.object({
  text: Joi.string().required(),
});
export const CategorySchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
});

export const CouponSchema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().required(),
  decription: Joi.string().required(),
  Minimum: Joi.number().required(),
  expiration: Joi.date().required(),
  maxUsage: Joi.number().required(),
});
