import { Inter, Lusitana, Rubik, Poppins, Fredoka } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const rubik = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const fredoka = Fredoka({
  weight: ["400", "500", "700"],
  // variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});
