import { CartItems, Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartStore {
  items: CartItems[];
  cartTotalAmount: number;
  discount: number;
  applyDiscount: (value: number) => void;
  addItem: (item: CartItems) => void;
  removeItem: (id: string) => void;
  increaseQuntity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  calculateTotalPrice: () => void;
  ClearCart: () => void;
}

export const useCart = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        discount: 0,
        cartTotalAmount: 0,
        addItem(item) {
          const currentItems = get()?.items;
          const existed = currentItems?.find((Item) => Item?.id === item.id);
          if (existed) {
            return toast(`${existed?.name} is already in the cart`);
          }
          const itemAdded = { ...item, quantity: item?.quantity };
          set({
            items: currentItems ? [...currentItems, itemAdded] : [itemAdded],
          });
          toast.success("Item added to cart.");
        },
        calculateTotalPrice() {
          const items = get()?.items;
          if (items) {
            const itemTotal = items.map((item) => item?.price * item.quantity);
            const cartTotalPrice = itemTotal.reduce(
              (total, item) => total + item,
              0
            );
            set({ cartTotalAmount: cartTotalPrice });
          }
        },
        increaseQuntity(itemId) {
          const currentItem = get().items.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          );
          set({ items: currentItem });
        },
        decreaseQuantity(itemId) {
          const currentItem = get().items.find((item) => item.id === itemId);
          if (currentItem.quantity <= 1) {
            get().removeItem(itemId);
          } else {
            const decQuantity = get().items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
            set({ items: decQuantity });
          }
        },
        removeItem(id) {
          const removedItem = get().items.filter((item) => item.id !== id);
          set({ items: removedItem });
          toast(`item removed from your cart`);
        },
        applyDiscount(value) {
          set({ discount: value });
        },
        ClearCart() {
          set({ items: null, cartTotalAmount: 0, discount: 0 });
        },
      }),

      {
        name: "cart",
      }
    )
  )
);
