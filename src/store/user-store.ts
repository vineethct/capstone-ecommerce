import { create } from "zustand";
import { FirebaseDecodedToken } from "@/services/jwt";

interface UserState {
  user: FirebaseDecodedToken | null | undefined;
  setUser: (user: FirebaseDecodedToken | null | undefined) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: undefined, // Initial state
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: undefined }),
}));

export default useUserStore;
