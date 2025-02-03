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
        path: "/",
        secure: true,
        sameSite: "Strict",
        httpOnly: false, // Can't be used in API routes, prefer setting it on the server
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export default AuthHandler;
