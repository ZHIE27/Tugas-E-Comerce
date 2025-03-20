import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo/Grasfam.svg";
import data from "./data/data.json";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

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
      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="rounded-md bg-cyan-200 w-[50%] fixed z-10 text-gray-400 items-start py-4 flex flex-col gap-4 md:hidden">
          {data.navbar.links.map((link, index) => (
            <Link
              key={index}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={`ms-4 text-sm hover:bg-amber-400 rounded-md hover:text-white block w-[80%] p-1.5 font-medium ${active === link ? "text-white" : "text-gray-400"}`}
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
            >
              {link}
            </Link>
          ))}
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-slate-100 border-b border-[#E9EAF0] px-8 py-5 flex justify-between items-center">
      {/* Links */}
      <div className="text-sm text-gray-400 px-8 flex justify-between items-center relative">
        <div className="hidden md:flex gap-8 relative">
          {data.navbar.links.map((link, index) => {
            const path = link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive = active === path;

            return (
              <div key={index} className="relative">
                <Link
                  to={path}
                  className={`relative text-sm px-2 py-1 transition-colors duration-300 ${
                    isActive ? "text-black" : "text-gray-400 hover:text-black"
                  }`}
                  onClick={() => setActive(path)}
                >
                  {link}
                  {/* Garis bawah animasi */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#FF6636] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="LOGO" className="h-8 transform scale-[4] w-auto me-5" />
      </div>
    </nav>
    </>
  );
}
