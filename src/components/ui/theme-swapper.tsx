"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { transparentBase64 } from "@/lib/constants";
import { Button } from "./button";

const ThemeSwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const emptyImage = transparentBase64;

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return (
      <Image
        src={emptyImage}
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <Button
        variant={"ghost"}
        size={"sm"}
        className="flex items-center hover:bg-blackAccent hover:text-white"
        onClick={() => setTheme("light")}
      >
        <FiSun className="size-3 cursor-pointer" />
      </Button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Button
        variant={"ghost"}
        size={"sm"}
        className="flex items-center hover:bg-blackAccent hover:text-white"
        onClick={() => setTheme("dark")}
      >
        <FiMoon className="size-3 cursor-pointer " />
      </Button>
    );
  }
};

export default ThemeSwitchButton;
