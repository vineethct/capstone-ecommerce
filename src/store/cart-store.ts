import { IProduct } from "@/data/shopify/products/interfaces";
import { create } from "zustand";

export interface IItem {
  product: IProduct;
  count: number;
}

interface ICartStore {
  items: IItem[];
  setItems: (items: IItem[] | []) => void;
  updateCount: (item: IItem, items: IItem[] | []) => void;
  clearItems: () => void;
}

export const useCartStore = create<ICartStore>((set) => {
  return {
    items: [],
    setItems: (items) => set({ items }),
    updateCount: (item: IItem, items: IItem[] | []) => {
      const updatedItems = items.map((i) =>
        i.product.id === item.product.id
          ? { count: item.count, product: i.product }
          : i
      );
      set({ items: updatedItems });
    },
    clearItems: () => set({ items: [] }),
  };
});
