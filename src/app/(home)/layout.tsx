import "../globals.css";
import "@radix-ui/themes/styles.css";
import NavBar from "@/components/NavBar/navbar";

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
