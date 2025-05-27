import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // NEW
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

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
