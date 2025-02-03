import { useContext, useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./auth-context";
import { PAGE_ROUTES } from "@/lib/constants";

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuthComponent = (props: any) => {
    const context = useContext(AuthContext);
    const user = context ? context.user : undefined;
    const router = useRouter();

    useEffect(() => {
      if (!user) router.push(PAGE_ROUTES.LOGIN);
    }, [user, router]);

    return user ? <WrappedComponent {...props} /> : undefined;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithAuthComponent;
};

export default withAuth;
