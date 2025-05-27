import React, { useState, useEffect } from "react";
import { FaLeaf, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-white/95 dark:bg-emerald-800 shadow-md rounded-b-xl sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3 max-w-5xl mx-auto">
        {/* Logo/Initials */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-green-900 dark:text-green-200 w-fit rounded-xl bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 px-2 py-1 transition select-none"
          title="Go to Home"
          style={{ fontFamily: "inherit" }}
        >
          <FaLeaf className="text-green-500 text-xl" />
          AK
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="space-x-2 flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-green-700 dark:text-green-100 hover:text-emerald-700 font-medium transition-colors px-3 py-1 rounded-xl hover:bg-green-100 dark:hover:bg-green-900
                  ${location.pathname === item.path ? "font-bold underline" : ""}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        {/* Night mode toggle & Hamburger */}
        <div className="flex items-center md:ml-4">
          <button
            onClick={() => setDark((v) => !v)}
            className="ml-1 p-2 rounded-full bg-white dark:bg-green-900 shadow border border-green-100 dark:border-green-900 transition"
            aria-label="Toggle dark mode"
            title="Toggle night mode"
          >
            {dark ? (
              <FaSun className="text-green-700" />
            ) : (
              <FaMoon className="text-green-800" />
            )}
          </button>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <FaBars className="text-green-900 dark:text-green-100 text-2xl" />
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 flex flex-col">
          <div className="bg-white dark:bg-green-950 rounded-b-xl shadow-lg p-6 pt-10 mx-4 mt-4 relative flex flex-col gap-5">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes className="text-green-900 dark:text-green-100 text-2xl" />
            </button>
            {/* Navigation Items */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block text-lg text-green-900 dark:text-green-100 font-semibold px-3 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-green-900 ${
                  location.pathname === item.path ? "font-bold underline" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Night Mode Toggle in menu */}
            <button
              onClick={() => setDark((v) => !v)}
              className="mt-2 p-2 rounded-full bg-white dark:bg-green-900 shadow border border-green-100 dark:border-green-900 transition self-center"
              aria-label="Toggle dark mode"
              title="Toggle night mode"
            >
              {dark ? (
                <FaSun className="text-green-700" />
              ) : (
                <FaMoon className="text-green-800" />
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
