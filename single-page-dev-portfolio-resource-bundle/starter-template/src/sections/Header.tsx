"use client";
import { useState } from 'react';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      {/* Burger Icon for small screens */}
      <div className="absolute right-5 top-4 md:hidden cursor-pointer" onClick={toggleMenu}>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>

      <nav
        className={`flex flex-col md:flex-row justify-center items-center gap-1 text-white border border-white/15 rounded-full backdrop-blur md:gap-3 
        ${menuOpen ? 'block' : 'hidden'} md:block`}
      >
        <a href="#hero" className="nav-item px-2">
          Home
        </a>
        <a href="#about" className="nav-item px-2">
          About
        </a>
        <a href="#projects" className="nav-item px-2">
          Projects
        </a>
        <a href="#education/experience" className="nav-item px-2">
          Education/Experience
        </a>
        <a href="#testimonials" className="nav-item px-2">
          Testimonials
        </a>
        <a href="#contact" className="nav-item px-2  hover:bg-white hover:text-black ">
          Contact
        </a>
      </nav>
    </div>
  );
};
