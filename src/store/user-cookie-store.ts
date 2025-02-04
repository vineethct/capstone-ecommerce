import { create } from "zustand";
import Cookies from "js-cookie";

export interface IUser {
  email: string;
  uid: string;
}

interface IUserCookieStore {
  userToken: string | null | undefined;
  decoded: IUser | null | undefined;
  setUserToken: (token: string | null | undefined) => void;
  setDecoded: (user: IUser | null | undefined) => void;
}

export const useUserCookieStore = create<IUserCookieStore>((set) => {
  return {
    userToken: undefined,
    setUserToken: (token) => {
      if (token) {
        Cookies.set("token", token, { expires: 1 }); // Store cookie for 7 days
      } else {
        Cookies.remove("token"); // Remove cookie if null
      }
      set({ userToken: token });
    },
    decoded: undefined,
    setDecoded: (user: IUser | null | undefined) => {
      set({ decoded: user });
    },
  };
});
