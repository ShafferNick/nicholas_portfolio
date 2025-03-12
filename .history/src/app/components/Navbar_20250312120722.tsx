'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="hidden md:flex justify-evenly w-full space-x-20">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About Me</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-end space-y-2 bg-gray-800 p-4 rounded-b-lg">
          <Link href="/" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}