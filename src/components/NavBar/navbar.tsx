"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitchButton from "../ui/themeSwapper";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary dark:bg-altPrimary text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              E-Shop
            </Link>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <div className="hidden lg:flex lg:space-x-4">
            <Link href="/" className="hover:bg-secondary px-3 py-2 rounded-md">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-secondary px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:bg-secondary px-3 py-2 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:bg-secondary px-3 py-2 rounded-md"
            >
              Contact
            </Link>

            <ThemeSwitchButton />
          </div>
        </div>
      </div>

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
