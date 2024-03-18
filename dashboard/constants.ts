import {
  Image,
  SlidersHorizontal,
  BadgeDollarSign,
  ShoppingBasket,
  Settings,
  Contact,
  Store,
  BadgePercent,
  MapPinnedIcon,
  Croissant,
  Award,
  Newspaper,
  Network,
} from "lucide-react";
export const SIDE_BAR_ITEMS = [
  { path: "/", name: "Overview", Icon: Store },
  { path: "/products", name: "Products", Icon: Croissant },
  { path: "/orders", name: "Orders", Icon: ShoppingBasket },
  { path: "/customized-orders", name: "Cutstom Orders", Icon: ShoppingBasket },
  { path: "/sales", name: "Sales", Icon: BadgeDollarSign },
  { path: "/categories", name: "Categories", Icon: Network },
  { path: "/sliders", name: "Sliders", Icon: SlidersHorizontal },
  { path: "/banners", name: "Banners", Icon: Image },
  { path: "/coupons", name: "Coupons", Icon: BadgePercent },
  { path: "/anouncements", name: "anouncements", Icon: Newspaper },
  { path: "/zones", name: "Zones", Icon: MapPinnedIcon },
  { path: "/reviews", name: "Reviews", Icon: Award },
  { path: "/contact", name: "Contact", Icon: Contact },
  // { path: "/settings", name: "Settings", Icon: Settings },
];

export const BASE_URL = "http://localhost:8000/v1";
//
// https://api.maisonlila.shop
export const POSITIONS = ["TOP", "BOTTOM"];

export const ORDER_STATUS = ["PENDING", "CONFIRMED", "DELIVERED"];
