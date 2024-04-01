export const NAVITEMS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "#contact" },
];

export const BASE_URL = "http://localhost:8000/v1";

export const filters = [
  { name: "All", path: "shop" },
  { name: "Best-Seller", path: "shop?page=1&bestSeller=true" },
  { name: "New-Arrival", path: "shop?page=1&newArrival=true" },
  { name: "Recommended", path: "shop?page=1&recommended=true" },
];
