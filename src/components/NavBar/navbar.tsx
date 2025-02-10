"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/online-shopping.png";
import HamburgerIcon from "@/assets/hamburger";
import useNavbarHeight from "@/store/navbar-store";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Profile from "../Profile/profile";
import { FaCartShopping } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import CartSheet from "../CartSheet/cart-sheet";
import { useCartStore } from "@/store/cart-store";
import { useUserCookieStore } from "@/store/user-cookie-store";
import UserHandler from "@/handlers/users";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { setItems } = useCartStore();
  const { decoded } = useUserCookieStore();
  const { setHeight } = useNavbarHeight();
  const pathname = usePathname();
  const userHandler = new UserHandler();

  useEffect(() => {
    if (!navRef.current) return;
    setHeight(navRef.current.clientHeight);
  }, [navRef, setHeight]);

  useEffect(() => {
    const init = async () => {
      const result = await userHandler.getCart({ uid: decoded?.uid || "" });
      if (result.success) {
        setItems(result?.data?.cart || []);
      }
    };
    if (decoded?.uid) init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decoded]);

  return (
    <nav
      ref={navRef}
      className={clsx("top-0 z-[1] w-full bg-white shadow-lg dark:bg-black", {
        absolute: pathname === "/",
      })}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className=" flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Image
                loading="lazy"
                src={logo}
                alt="logo"
                className="size-12 md:size-8 "
              />
              <h5 className="">Joybox</h5>
            </Link>
          </div>

          {/* Hamburger menu (mobile) */}
          {/* <div className="ml-auto block lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              // onClick={() => {}}
              className="focus:outline-none"
            >
              <HamburgerIcon />
            </button>
          </div> */}

          {/* Navigation links */}
          <div className="ml-auto mr-2 lg:flex lg:items-center lg:space-x-2">
            <Link
              href="/browse"
              className="rounded-md px-3 py-2  hover:bg-blackAccent hover:text-white"
            >
              Browse
            </Link>
          </div>

          <div className="mr-2">
            <CartSheet />
          </div>

          <div className="block">
            <Profile />
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
