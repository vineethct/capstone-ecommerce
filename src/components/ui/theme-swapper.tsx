"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { transparentBase64 } from "@/lib/constants";

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
      <div className="flex items-center">
        <FiSun className="cursor-pointer" onClick={() => setTheme("light")} />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="flex items-center">
        <FiMoon className="cursor-pointer" onClick={() => setTheme("dark")} />
      </div>
    );
  }
};

export default ThemeSwitchButton;
