export const NAVITEMS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "#contact" },
];

export const BASE_URL = "http://localhost:8000/v1";

export const filters = [
  { name: "All", path: "shop" },
  { name: "bestSeller", path: "shop?bestSeller=true" },
  { name: "newArrival", path: "shop?newArrival=true" },
  { name: "recommended", path: "shop?recommended=true" },
];
