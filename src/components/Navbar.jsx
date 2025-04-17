import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/assets/logo/Grasfam.svg";
import data from "./data/data.json";

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(localStorage.getItem("activeLink") || "Home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Sync active state with the current route on page load
  useEffect(() => {
    const currentPath = location.pathname === "/" ? "Home" : 
      data.navbar.links.find(link => `/${link.toLowerCase().replace(/\s+/g, "-")}` === location.pathname) || "Home";

    setActive(currentPath);
    localStorage.setItem("activeLink", currentPath);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-slate-100 border-b flex shadow-md border-[#E9EAF0] px-8 py-5 justify-between items-center fixed right-0 left-0 mb-7 z-50">
        {/* Logo */}
        <div className="ms-5 flex-shrink-0">
          <img src={logo} alt="LOGO" className="h-8 scale-300 w-auto me-5" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {data.navbar.links.map((link, index) => {
            const path = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive = active === link;

            return (
              <Link
                key={index}
                to={path}
                className={`relative text-sm px-2 py-1 transition-colors duration-300 ${
                  isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"
                }`}
                onClick={() => {
                  setActive(link);
                  localStorage.setItem("activeLink", link);
                  window.scrollTo(0, 0);
                }}
              >
                {link}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#FF6636] transition-all duration-150 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2 rounded focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="block w-6 h-0.5 bg-black transition-all"
          ></motion.span>
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block w-6 h-0.5 bg-black transition-all"
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="block w-6 h-0.5 bg-black transition-all"
          ></motion.span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-16 z-50 left-0 w-[80%] bg-slate-100 bg-opacity-50 backdrop-blur-lg shadow-md md:hidden flex flex-col items-start p-4 gap-4 rounded-r-lg"
            >
              {data.navbar.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm rounded-md hover:text-cyan-700 block w-full p-2 font-medium ${
                    active === link ? "text-cyan-700 " : "text-gray-400"
                  }`}
                  onClick={() => {
                    setActive(link);
                    localStorage.setItem("activeLink", link);
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link}
                  <div className="w-full bg-gray-300 h-[.1px]"></div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="w-full h-10"></div>
    </>
  );
}
