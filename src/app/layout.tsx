import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { fredoka } from "@/components/ui/fonts";
import NavBar from "@/components/NavBar/navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "E-shop",
  description: "C&T Next.js starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredoka.className} relative antialiased`}>
        <Theme>
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </Theme>
      </body>
    </html>
  );
}
