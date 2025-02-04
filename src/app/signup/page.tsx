"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@radix-ui/themes";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthHandler from "@/handlers/auth";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/lib/constants";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const authHandler = new AuthHandler();
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<IFormInput>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setLoading(true);

    try {
      if (data.password !== data.confirmPassword) {
        throw new Error("Password mismatch");
      }
      await authHandler.signup(data);
      router.replace(PAGE_ROUTES.LOGIN);
    } catch (error: any) {
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="md:w-4/12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>
              <h2 className="text-3xl">Register to Joybox</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Input
              aria-label="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
              })}
            />
            <Input
              aria-label="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />

            <Input
              aria-label="password"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: true,
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            {loading ? <Spinner /> : <Button type="submit">Signup</Button>}
            <Link href={PAGE_ROUTES.LOGIN}>Already have an account ?</Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
