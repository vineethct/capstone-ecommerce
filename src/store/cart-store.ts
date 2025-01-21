import { create } from "zustand";

type ICartStore = {
  //   height: number,
  //   setHeight: (state: number) => void,
};

const useNavbarHeight = create<ICartStore>()((set) => ({
  //   height: 0,
  //   setHeight: (state: number) => set({ height: state }),
  //   reset: () => set({ height: 0 }),
}));

export default useNavbarHeight;
