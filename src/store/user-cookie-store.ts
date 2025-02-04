import { create } from "zustand";
import Cookies from "js-cookie";
import * as jose from "jose";

interface CookieState {
  userToken: string | null | undefined;
  decoded: jose.JWTPayload | null | undefined;
  setUserToken: (token: string | null) => void;
  setDecoded: (user: jose.JWTPayload | null | undefined) => void;
}

export const useUserCookieStore = create<CookieState>((set) => {
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
    setDecoded: (user: jose.JWTPayload | null | undefined) => {
      set({ decoded: user });
    },
  };
});
