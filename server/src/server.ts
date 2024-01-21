import express from "express";
import morgan from "morgan";
import "dotenv";
import cors from "cors";
import cookie from "cookie-parser";
import helmet from "helmet";

import ProductRoute from "./routes/ProductRoute.js";
import ContactRoute from "./routes/ContactRoute.js";
import CouponRoute from "./routes/CouponRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import SpecialOrderRoute from "./routes/SpecialOrderRoute.js";
import SliderRoute from "./routes/SliderRoute.js";
import SliderContentRoute from "./routes/SliderContentRoute.js";
import Anouncement from "./routes/AnouncementRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import ManagerRoute from "./routes/ManagerRoute.js";
import ZoneRoute from "./routes/ZoneRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
import SalesRoute from "./routes/SalesRoute.js";
import ReviewRoute from "./routes/ReviewRoute.js";
import BannerRoute from "./routes/BannerRoute.js";
import AddressRoute from "./routes/AddressRoute.js";
import BottomImageRoute from "./routes/BottomImageRoute.js";
import SubCategoryRoute from "./routes/SubCategoryRoute.js";

import { errorHandler } from "./middlewares/errorHandler.js";
import { env } from "process";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(cookie());
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1/auth", AuthRoute);
app.use("/v1/manager", ManagerRoute);
app.use("/v1/category", CategoryRoute);
app.use("/v1/subCategory", SubCategoryRoute);
app.use("/v1/product", ProductRoute);
app.use("/v1/banner", BannerRoute);
app.use("/v1/review", ReviewRoute);
app.use("/v1/coupon", CouponRoute);
app.use("/v1/zone", ZoneRoute);
app.use("/v1/sales", SalesRoute);
app.use("/v1/slider", SliderRoute);
app.use("/v1/content", SliderContentRoute);
app.use("/v1/anoun", Anouncement);
app.use("/v1/address", AddressRoute);
app.use("/v1/bottom-image", BottomImageRoute);
app.use("/v1/special-order", SpecialOrderRoute);
app.use("/v1/order", OrderRoute);
app.use("/v1/contact", ContactRoute);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server is running on PORT 8000");
});
