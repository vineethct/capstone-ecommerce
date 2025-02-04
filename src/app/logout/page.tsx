"use client";
import { useUserCookieStore } from "@/store/user-cookie-store";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/lib/constants";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  const { setUserToken, setDecoded } = useUserCookieStore();

  useEffect(() => {
    setUserToken("");
    setDecoded(undefined);
    router.replace(PAGE_ROUTES.LOGIN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default Logout;
