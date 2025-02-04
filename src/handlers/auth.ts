import { AuthCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import Cookies from "js-cookie";

interface ILoginPayload {
  email: string;
  password: string;
}

interface ILoginResponse {
  user: {
    accessToken: string,
  };
}

class AuthHandler {
  async login(payload: ILoginPayload) {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        payload.email,
        payload.password
      );

      const token = await result.user.getIdToken();

      Cookies.set("token", token, {
        expires: 1, // Expiry in days
        path: "/", // Cookie will be available for the entire domain
        secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production
        sameSite: "Strict", // Helps to prevent CSRF
      });

      return result;
    } catch (error: any) {
      // console.log(error, "error");
      throw new Error(error);
    }
  }
}

export default AuthHandler;
