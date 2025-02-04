"use client";
import { verifyToken } from "@/services/jwt";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserCookieStore } from "@/store/user-cookie-store";
import { PAGE_ROUTES } from "@/lib/constants";

const AuthCheck = ({
  children,
  token,
}: {
  children: React.ReactNode,
  token: string | null | undefined,
}) => {
  const router = useRouter();
  const { setUserToken, setDecoded } = useUserCookieStore();

  useEffect(() => {
    const init = async () => {
      try {
        const authUser = await verifyToken(token || "");
        if (authUser) {
          setUserToken(token || "");
          setDecoded(authUser.payload);
        }
      } catch {
        setUserToken("");
        setDecoded(undefined);
        router.replace(PAGE_ROUTES.LOGIN);
      }
    };
    init();
  }, []);

  return <>{children}</>;
};

export default AuthCheck;
