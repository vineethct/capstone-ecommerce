import { useContext, useEffect, ComponentType } from 'react';
import { useRouter } from 'next/router';
import { AuthContext, IUser } from "./auth-context";

const withAuth = (WrappedComponent: ComponentType) => {
  return (props : any) => {
    const context = useContext(AuthContext);
    const user = context ? context.user : null;
    const router = useRouter();

    useEffect(() => {
      if (!user) router.push('/login');
    }, [user, router]);

    return user ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;