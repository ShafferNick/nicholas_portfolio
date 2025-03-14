'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8">
        {/* Desktop Menu Items */}
        <div className="hidden md:flex justify-between w-full space-x-6 desktop-menu">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">About Me</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Contact</Link>
          <Link href="/projects" className="hover:text-gray-300 transition-colors duration-300 ease-in-out">Projects</Link>
        </div>
        {/* Hamburger Menu Toggle */}
        <div className="md:hidden relative mobile-menu-toggle">
          <label htmlFor="menuToggle" className="block fixed top-4 right-4 z-20 select-none cursor-pointer">
            <input
              type="checkbox"
              id="menuToggle"
              className="absolute w-10 h-8 -top-2 -left-2 opacity-0 z-20 cursor-pointer"
              checked={isOpen}
              onChange={() => setIsOpen(!isOpen)}
            />
            <span className={`block w-8 h-1 mb-1.5 relative bg-gray-300 rounded ${isOpen ? 'transform rotate-45 translate-x-[-2px] translate-y-[-1px] bg-gray-800' : ''} transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] origin-[4px_0px]`}></span>
            <span className={`block w-8 h-1 mb-1.5 relative bg-gray-300 rounded ${isOpen ? 'opacity-0 transform scale-50' : ''} transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)]`}></span>
            <span className={`block w-8 h-1 mb-1.5 relative bg-gray-300 rounded ${isOpen ? 'transform -rotate-45 translate-x-0 translate-y-[-1px] bg-gray-800' : ''} transition-all duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] origin-[0%_100%]`}></span>
          </label>
          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 w-64 max-h-screen bg-gray-200 p-6 pt-32 box-border overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] z-10 mobile-menu ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>About Me</Link>
              <Link href="/contact" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="/projects" className="text-gray-800 hover:text-red-400 transition-colors duration-300 ease-in-out text-xl py-2 text-center w-full" onClick={() => setIsOpen(false)}>Projects</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}