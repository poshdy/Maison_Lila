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
  text: Joi.string(),
  title: Joi.string(),
  image: Joi.string(),
});

export const ProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required().min(10),
  categoryId: Joi.string().required(),
  images: Joi.array().items(Joi.string()),
});
export const SliderSchema = Joi.object({
  name: Joi.string().required(),
  place: Joi.string().required(),
});
export const BannerSchema = Joi.object({
  text: Joi.string().required(),
  image: Joi.string().required(),
  title: Joi.string(),
});
export const AnouncementSchema = Joi.object({
  text: Joi.string().required(),
});
export const CategorySchema = Joi.object({
  name: Joi.string().required(),
  imageUrl: Joi.string().required(),
});
