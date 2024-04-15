export const NAVITEMS = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Cart", path: "/cart" },
  { name: "Contact", path: "#contact" },
];

export const BASE_URL = "http://localhost:8000/v1";
// https://api.maisonlila.shop
export const filters = [
  { name: "All", path: "shop?page=1" },
  { name: "Best-Seller", path: "shop?bestSeller=true" },
  { name: "New-Arrival", path: "shop?newArrival=true" },
  { name: "Recommended", path: "shop?recommended=true" },
];
