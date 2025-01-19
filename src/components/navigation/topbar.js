"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "@/Components/authentication/useAuth"; // Assuming this is your authentication hook

const Topbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Use authentication hook to get user state

  // Map pathnames to titles
  const titleMap = {
    "/earlymobilityandmigration": "Migration",
    "/afrocelebration": "Afro Celebration",
    "/culturalmapping": "Cultural Mapping",
    "/digitalethnography": "Digital Ethnography",
    "/civilization": "Civilization",
  };

  // Get the title based on the current pathname
  const title = titleMap[pathname] || "TAMADUNI";

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isActive = (route) => pathname === route;

  return (
    <div className="relative">
      <nav className="flex justify-between items-center py-4 px-6 shadow-md bg-white z-50">
        <Link href="/">
          <div className="flex flex-col items-center justify-between">
            <Image
              src={"/logo/tamaduni_logo.png"}
              alt="logo"
              width={60}
              height={60}
            />
          </div>
        </Link>
        <h1
          className="text-xl font-bold lg:hidden"
          style={{ fontFamily: '"Inria Serif", serif' }}
        >
          {title}
        </h1>
        <button
          className="lg:hidden text-gray-600 hover:text-black"
          onClick={toggleMenu}
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
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link
            href="/afrocelebration"
            className={`text-gray-600 hover:text-black ${
              isActive("/afrocelebration") ? "font-bold text-black" : ""
            }`}
          >
            Afro Celebration
          </Link>
          <Link
            href="/culturalmapping"
            className={`text-gray-600 hover:text-black ${
              isActive("/culturalmapping") ? "font-bold text-black" : ""
            }`}
          >
            Cultural Mapping
          </Link>
          <Link
            href="/digitalethnography"
            className={`text-gray-600 hover:text-black ${
              isActive("/digitalethnography") ? "font-bold text-black" : ""
            }`}
          >
            Digital Ethnography
          </Link>
          <Link
            href="/civilization"
            className={`text-gray-600 hover:text-black ${
              isActive("/civilization") ? "font-bold text-black" : ""
            }`}
          >
            Civilization
          </Link>
          <Link
            href="/earlymobilityandmigration"
            className={`text-gray-600 hover:text-black ${
              isActive("/earlymobilityandmigration")
                ? "font-bold text-black"
                : ""
            }`}
          >
            Migration
          </Link>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-black ${
              isActive("/about") ? "font-bold text-black" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/team"
            className={`text-gray-600 hover:text-black ${
              isActive("/team") ? "font-bold text-black" : ""
            }`}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-black ${
              isActive("/contact") ? "font-bold text-black" : ""
            }`}
          >
            Contact
          </Link>
          {user ? (
            <button onClick={logout} className="text-red-300 hover:text-black">
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-black"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-gray-600 hover:text-black"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-6 lg:hidden transition-transform duration-300 ease-in-out z-40">
          <Link
            href="/afrocelebration"
            className={`text-gray-600 hover:text-black ${
              isActive("/afrocelebration") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Afro Celebration
          </Link>

          <Link
            href="/culturalmapping"
            className={`text-gray-600 hover:text-black ${
              isActive("/culturalmapping") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Cultural Mapping
          </Link>

          <Link
            href="/digitalethnography"
            className={`text-gray-600 hover:text-black ${
              isActive("/digitalethnography") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Digital Ethnography
          </Link>

          <Link
            href="/civilization"
            className={`text-gray-600 hover:text-black ${
              isActive("/civilization") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Civilization
          </Link>
          <Link
            href="/earlymobilityandmigration"
            className={`text-gray-600 hover:text-black ${
              isActive("/earlymobilityandmigration")
                ? "font-bold text-black"
                : ""
            }`}
            onClick={toggleMenu}
          >
            Migration
          </Link>
          <Link
            href="/about"
            className={`text-gray-600 hover:text-black ${
              isActive("/about") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/team"
            className={`text-gray-600 hover:text-black ${
              isActive("/team") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Team
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-black ${
              isActive("/contact") ? "font-bold text-black" : ""
            }`}
            onClick={toggleMenu}
          >
            Contact
          </Link>
          {user ? (
            <button
              onClick={() => {
                logout();
                toggleMenu();
              }}
              className="text-red-300 hover:text-black"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-black"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-gray-600 hover:text-black"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Topbar;
