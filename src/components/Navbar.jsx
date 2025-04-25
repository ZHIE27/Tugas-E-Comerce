import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/logo/Grasfam.svg";
import data from "./data/data.json";
import "../App.css"
export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(localStorage.getItem("activeLink") || "Home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  useEffect(() => {
    const currentPath =
      location.pathname === "/"
        ? "Home"
        : data.navbar.links.find(
            (link) => `/${link.name.toLowerCase().replace(/\s+/g, "-")}` === location.pathname
          ) || "Home";

    setActive(currentPath);
    localStorage.setItem("activeLink", currentPath);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
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
      <nav className="bg-slate-100 border-b flex justify-start shadow-md border-[#E9EAF0] px-8 py-5 items-center fixed right-0 left-0 mb-7 z-50">
        {/* Logo */}
        <div className="ms-5 flex-shrink-0">
          <img src={logo} alt="LOGO" className="h-8 scale-300 w-auto me-5" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden ms-30 md:flex gap-8 items-center">
          {data.navbar.links.map((link, index) => {
            const path = link.name.toLowerCase() === "home" ? "/" : `/${link.name.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive = link.name === "About"
            ? location.pathname === "/about"
            : active === link.name;
            const isAbout = link.name === "About";

            return (
              <div key={index} className="relative group">
                <Link
                  to={path}
                  className={`relative text-sm px-2 py-1 transition-colors duration-300 ${
                    isActive ? "text-black font-semibold" : "text-gray-400 hover:text-black"
                  }`}
                  onClick={() => {
                    setActive(link.name);
                    localStorage.setItem("activeLink", link.name);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#FF6636] transition-all duration-150 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>

                {/* Submenu Dropdown */}
                {isAbout && (
                  <div className="absolute top-5 left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded w-40 z-50">
                    {data.navbar.submenus.map((submenu, index) => (
                      <Link
                        key={index}
                        to={`/about${submenu.path}`}
                        className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
                        onClick={() => {
                          // handleNavigate(submenu.path)
                          setActive(submenu.name);
                          localStorage.setItem("activeLink", submenu.name);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {submenu.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          ref={menuButtonRef}
          className="md:hidden absolute right-6 flex flex-col justify-center items-center w-10 h-10 p-2 rounded focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-16 z-50 left-0 w-[80%] bg-slate-100 bg-opacity-50 backdrop-blur-lg shadow-md md:hidden flex flex-col items-start p-4 gap-4 rounded-r-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {data.navbar.links.map((link, index) => (
          <div key={index} className="w-full">
            <Link
              to={
                link.name.toLowerCase() === "home"
                  ? "/"
                  : `/${link.name.toLowerCase().replace(/\s+/g, "-")}`
              }
              className={`text-sm block w-full p-2 font-medium ${
                active === link.name ? "text-cyan-700" : "text-gray-600"
              } hover:bg-gray-300 rounded`}
              onClick={() => {
                setActive(link.name);
                localStorage.setItem("activeLink", link);
                setIsOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              <div className="flex">
                <img src={link.icon} className="w-[20px] me-3 h-[20px]" alt="icon" />{link.name}
              </div>
            </Link>

            {/* Submenu in mobile */}
            {link.name === "About" && isOpen && (
              <div className="ml-4 mt-2">
                {data.navbar.submenus.map((submenu, index) => (
                  <Link
                    key={index}
                    to={`/about${submenu.path}`}
                    className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 rounded"
                    onClick={() => {
                      setActive(submenu.name);
                      localStorage.setItem("activeLink", submenu.name);
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="flex">
                      <img className="w-[20px] h-[20px] me-3" src={submenu.icon} alt="icon" />{submenu.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full h-10"></div>
    </>
  );
}
