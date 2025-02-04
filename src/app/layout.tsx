import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { poppins } from "@/components/ui/fonts";
import Providers from "./(hoc)/providers";
import AuthCheck from "./(hoc)/auth-check";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Joybox",
  description: "C&T Next.js starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} relative antialiased`}>
        <Theme>
          <AuthCheck token={token?.value}>
            <Providers>{children}</Providers>
          </AuthCheck>
        </Theme>
      </body>
    </html>
  );
}
