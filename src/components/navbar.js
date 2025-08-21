import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Get current page from route
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/about") return "About Me";
    if (path === "/project") return "Projects";
    if (path === "/experience") return "Experience";
    return "Home";
  };

  return (
    <div className="bg-[#FFE7D1] p-6 border-8 border-black border-solid">
      {/* Desktop Navbar */}
      <div className="hidden [@media(min-width:953px)]:flex flex-row gap-4 justify-between px-5">
        <Link to="/" className="text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
          About Me
        </Link>
        <Link to="/project" className="text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
          Projects
        </Link>
        <Link to="/experience" className="text-4xl font-comic font-black hover:shadow-text transition-all duration-300 cursor-pointer">
          Experience
        </Link>
      </div>

      {/* Mobile Navbar Top Row */}
      <div className="[@media(min-width:953px)]:hidden px-5 flex justify-between items-center relative">
        {/* Centered Page Title - shown only when menu is closed */}
        {!isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 text-3xl font-comic font-black">
            {getCurrentPage()}
          </div>
        )}

        {/* Spacer to balance hamburger */}
        <div className="w-8 h-8" />

        {/* Hamburger Icon */}
        <div onClick={toggleMenu} className="text-4xl cursor-pointer ml-auto z-10">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu - aligned to left when open */}
      {isOpen && (
        <div className="[@media(min-width:953px)]:hidden flex flex-col items-start gap-5 mt-5 px-5">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-2xl font-comic font-black hover:shadow-text transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-2xl font-comic font-black hover:shadow-text transition-all duration-300"
          >
            About Me
          </Link>
          <Link
            to="/project"
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-2xl font-comic font-black hover:shadow-text transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to="/experience"
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-2xl font-comic font-black hover:shadow-text transition-all duration-300"
          >
            Experience
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
