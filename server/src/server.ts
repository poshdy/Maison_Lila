import express from "express";
import morgan from "morgan";
import "dotenv";
import cors from "cors";
import cookie from "cookie-parser";
import helmet from "helmet";

import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
import ContactRoute from "./routes/ContactRoute.js";
import CouponRoute from "./routes/CouponRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import CustomizedOrderRoute from "./routes/CusomizedOrderRoute.js";
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
import StatsRoute from "./routes/StatsRoute.js";

import { errorHandler } from "./middlewares/errorHandler.js";
const PORT = process.env.PORT || 8000;
const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [
      "https://maisonlila.shop",
      "https://admin.maisonlila.shop",
      "www.maisonlila.shop",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(cookie());
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1/auth", AuthRoute);
app.use("/v1/manager", ManagerRoute);
app.use("/v1/contact", ContactRoute);
app.use("/v1/user", UserRoute);
app.use("/v1/anoun", Anouncement);
app.use("/v1/banner", BannerRoute);
app.use("/v1/slider", SliderRoute);
app.use("/v1/content", SliderContentRoute);
app.use("/v1/zone", ZoneRoute);
app.use("/v1/address", AddressRoute);
app.use("/v1/category", CategoryRoute);
app.use("/v1/stats", StatsRoute);
app.use("/v1/product", ProductRoute);
app.use("/v1/review", ReviewRoute);
app.use("/v1/coupon", CouponRoute);
app.use("/v1/sales", SalesRoute);
app.use("/v1/custom-order", CustomizedOrderRoute);
app.use("/v1/order", OrderRoute);
app.use("/v1/user", UserRoute);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server is running on PORT 8000");
});
