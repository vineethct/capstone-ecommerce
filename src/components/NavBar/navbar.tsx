"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeSwitchButton from "../ui/theme-swapper";
import Image from "next/image";
import logo from "@/assets/online-shopping.png";
import HamburgerIcon from "@/assets/hamburger";
import useNavbarHeight from "@/store/navbar-store";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen] = useState(false);

  const { setHeight } = useNavbarHeight();
  const pathname = usePathname();

  useEffect(() => {
    if (!navRef.current) return;
    setHeight(navRef.current.clientHeight);
  }, [navRef, setHeight]);

  return (
    <nav
      ref={navRef}
      className={clsx("top-0 z-[1] w-full bg-white shadow-lg dark:bg-black", {
        absolute: pathname === "/",
      })}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Image src={logo} alt="logo" className="size-12 md:size-8 " />
              <h5 className="">JoyBox</h5>
            </Link>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="block lg:hidden">
            <button
              // onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onClick={() => {}}
              className=" focus:outline-none"
            >
              <HamburgerIcon />
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden  lg:flex lg:space-x-4">
            <Link
              href="/browse"
              className="rounded-md px-3 py-2  hover:bg-blackAccent hover:text-white"
            >
              Browse
            </Link>

            <ThemeSwitchButton />
          </div>
        </div>
      </div>
      <hr className="mx-20 hidden dark:visible" />

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-700">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-blue-700">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-blue-700">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
