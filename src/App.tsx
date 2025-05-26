import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaLeaf, FaSun, FaMoon } from "react-icons/fa";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

const NAV_ITEMS = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

function Navbar({ dark, setDark }: { dark: boolean, setDark: (b: boolean) => void }) {
  const location = useLocation();
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-emerald-800 shadow-md rounded-b-xl sticky top-0 z-20">
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold text-green-900 dark:text-green-200 w-fit rounded-xl bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 px-2 py-1 transition select-none"
        title="Go to Home"
        style={{ fontFamily: "inherit" }}
      >
        <FaLeaf className="text-green-500 text-xl" />
        AK
      </Link>
      <nav className="flex-1 flex justify-center">
        <div className="space-x-2 flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-green-700 dark:text-green-100 hover:text-emerald-700 font-medium transition-colors px-3 py-1 rounded-xl hover:bg-green-50 dark:hover:bg-green-900
                ${location.pathname === item.path ? "font-bold underline" : ""}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex items-center">
        <button
          onClick={() => setDark(!dark)}

          className="ml-1 p-2 rounded-full bg-white dark:bg-green-900 shadow border border-green-100 dark:border-green-900 transition"
          aria-label="Toggle dark mode"
          title="Toggle night mode"
        >
          {dark ? <FaSun className="text-green-700" /> : <FaMoon className="text-green-800" />}
        </button>
      </div>
    </header>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-black transition-colors duration-500">
        <Navbar dark={dark} setDark={setDark} />
        <main className="flex-1 w-full max-w-5xl mx-auto px-2 md:px-8 py-6 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Optionally add a 404: <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <footer className="bg-white/90 dark:bg-green-950/90 text-center py-3 text-xs text-green-800 dark:text-green-100 rounded-t-xl shadow-inner flex flex-col gap-2 items-center relative z-10">
          <span className="flex items-center gap-1 justify-center">
            © {new Date().getFullYear()} Anirudh Kanneganti
          </span>
          <span>
            Data. AI. Green thinking. Built with React + TypeScript. 🌱
          </span>
        </footer>
      </div>
    </Router>
  );
}
