import { createContext, useState, useEffect, ReactNode } from "react";
import authData from "@/data/auth/database.json"

export interface IUser {
  email: string;
  password: string;
  name: string;  
}

interface IAuthContext {
  user: IUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null >(null);

  useEffect(() => {
    // Check token on initial load
    const checkAuth = async () => {
     //TODO: checkAuth logic
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    //TODO: login logic
  };

  const logout = async () => {
    //TODO: logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
