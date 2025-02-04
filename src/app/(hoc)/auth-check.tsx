"use client";
import { verifyToken } from "@/services/jwt";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IUser, useUserCookieStore } from "@/store/user-cookie-store";
import { PAGE_ROUTES } from "@/lib/constants";

const AuthCheck = ({
  children,
  token,
}: {
  children: React.ReactNode,
  token: string | null | undefined,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setUserToken, setDecoded } = useUserCookieStore();

  useEffect(() => {
    const init = async () => {
      try {
        const authUser = await verifyToken(token || "");
        if (authUser) {
          const user: IUser = {
            email: authUser?.payload?.email?.toString() || "",
            uid: authUser?.payload?.user_id?.toString() || "",
          };
          setUserToken(token);
          setDecoded(user);
        }
      } catch {
        setUserToken("");
        setDecoded(undefined);
        router.replace(PAGE_ROUTES.LOGIN);
      }
    };
    if (pathname !== PAGE_ROUTES.LOGIN && pathname !== PAGE_ROUTES.LOGOUT)
      init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AuthCheck;
