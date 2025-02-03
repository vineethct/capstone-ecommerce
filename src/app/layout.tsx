import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import { fredoka } from "@/components/ui/fonts";
import Providers from "./providers";
import { AuthProvider } from "@/context/AuthContext/auth-context";

export const metadata: Metadata = {
  title: "Joybox",
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
        <AuthProvider>
          <Theme>
            <Providers>{children}</Providers>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
