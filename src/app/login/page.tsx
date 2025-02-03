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

type IFormInput = {
  email: string,
  password: string,
};

const Login = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();
  const authHandler = new AuthHandler();

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    try {
      const result = await authHandler.login(data);
      router.push(PAGE_ROUTES.HOME);
    } catch (error: any) {
      console.log(error, "FIREBASE ERROR");
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
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
