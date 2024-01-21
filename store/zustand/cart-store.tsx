import { CartItems } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartStore {
  items: CartItems[];
  addItem: (item: CartItems) => void;
  removeItem: (id: string) => void;
  increaseQuntity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  discountValue: number;
  applyCoupon: (discount: number) => void;
  subtotal: number;
  cartTotalAmount: number;
  calculateTotalPrice: () => void;
  removeAll: () => void;
}

export const useCart = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        discountValue: 0,
        subtotal: 0,
        cartTotalAmount: 0,
        calculateTotalPrice: () => {
          const totalValue = get()?.items?.map((item) => {
              return Number(item.price) * item.quantity;
            })
            .reduce((total, item) => Number(item) + Number(total), 0);
          set({ subtotal: totalValue });
          if (get().discountValue > 0) {
            set({ cartTotalAmount: totalValue - get().discountValue });
          } else {
            set({ cartTotalAmount: totalValue });
          }
        },
        applyCoupon(discount) {
          set({ discountValue: discount });
        },
        addItem(item) {
          const currentItems = get()?.items;
          const existed = currentItems?.find((Item) => Item?.id === item?.id);

          if (existed) {
            return toast(`${existed?.name} is already in the cart`);
          }
          const tempPro = { ...item, quantity: 1 };
          set({ items: [...get()?.items, tempPro] });
          toast.success("Item added to cart.");
        },
        removeItem(id) {
          set((state) => ({
            items: state?.items?.filter((data) => data.id !== id),
          }));
          toast.success(`item removed from your cart`);
        },
        increaseQuntity: (itemId) =>
          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })),
        decreaseQuantity(itemId) {
          const item = get().items?.find((Item) => itemId == Item?.id);
          if (Number(item?.quantity) <= 1) {
            get().removeItem(String(item?.id));
          } else {
            set((state) => ({
              items: state.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              ),
            }));
          }
        },
        removeAll: () => {
          set({ items: [], discountValue: 0 });

          toast.success("cart cleared");
        },
      }),

      {
        name: "cart-storage",
      }
    )
  )
);
