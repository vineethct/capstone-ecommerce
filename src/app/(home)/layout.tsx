import type { Metadata } from "next";

import "../globals.css";
import "@radix-ui/themes/styles.css";
import NavBar from "@/components/NavBar/navbar";

export const metadata: Metadata = {
  title: "E-shop",
  description: "C&T Next.js starter template",
};

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
        <>
            <NavBar />
            {children}
        </>
  );
}
