import { IProduct } from "@/data/shopify/products/interfaces";
import { create } from "zustand";

export interface IItem {
  product: IProduct;
  count: number;
}

interface ICartStore {
  items: IItem[];
  setItems: (items: IItem[]) => void;
  clearItems: () => void;
}

export const useCartStore = create<ICartStore>((set) => {
  return {
    items: [],
    setItems: (items) => set({ items }),
    clearItems: () => set({ items: [] }),
  };
});
