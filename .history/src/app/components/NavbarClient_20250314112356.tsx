'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8">
        {/* Desktop Menu Items */}
        <div className="hidden md:flex justify-between w-full desktop-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Me</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
        </div>
        {/* Hamburger Menu Toggle */}
        <div className="md:hidden relative mobile-menu-toggle">
          <label htmlFor="menuToggle" className="block fixed top-4 right-4 z-50 select-none cursor-pointer">
            <input
              type="checkbox"
              id="menuToggle"
              className="absolute w-10 h-8 -top-2 -left-2 opacity-0 z-60 cursor-pointer"
              checked={isOpen}
              onChange={() => {
                console.log('Toggling menu, isOpen:', !isOpen); // Debug log
                setIsOpen(!isOpen);
              }}
            />
            <span className={`block w-8 h-1 mb-1.5 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] origin-[4px_0px] ${isOpen ? 'transform rotate-45 translate-x-[-2px] translate-y-[4px] bg-gray-800' : ''}`}></span>
            <span className={`block w-8 h-1 mb-1.5 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${isOpen ? 'opacity-0 transform scale-50' : ''}`}></span>
            <span className={`block w-8 h-1 mb-1.5 bg-white rounded transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] origin-[0%_100%] ${isOpen ? 'transform -rotate-45 translate-x-0 translate-y-[-4px] bg-gray-800' : ''}`}></span>
          </label>
          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 w-64 h-screen bg-gray-200 p-6 pt-16 box-border overflow-y-auto z-50 mobile-menu ${isOpen ? 'active' : ''}`}
          >
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>About Me</Link>
              <Link href="/projects" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/contact" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}