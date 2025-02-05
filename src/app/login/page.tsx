"use client";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthHandler from "@/handlers/auth";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/lib/constants";
import { useState } from "react";
import { Spinner } from "@radix-ui/themes";
import { IUser, useUserCookieStore } from "@/store/user-cookie-store";
import Link from "next/link";
import { toast } from "@/hooks/use-toast";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const { setDecoded } = useUserCookieStore();
  const authHandler = new AuthHandler();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      setLoading(true);
      const result = await authHandler.login(data);

      const user: IUser = {
        email: result?.user?.email?.toString() || "",
        uid: result?.user?.uid?.toString() || "",
      };

      setDecoded(user);

      router.push(PAGE_ROUTES.HOME);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed!",
        description: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="md:w-4/12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl">Welcome to Joybox</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              aria-label="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <Input
              aria-label="password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            {loading ? <Spinner /> : <Button type="submit">Login</Button>}
            <Link href={PAGE_ROUTES.SIGNUP}>Dont have an account ?</Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
