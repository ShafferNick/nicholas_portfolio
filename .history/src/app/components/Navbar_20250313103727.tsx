'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="hidden md:flex justify-between w-full space-x-12">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">About Me</Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded"
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
        {isOpen && (
          <div className="md:hidden flex flex-col items-center justify-center space-y-4 bg-gray-800 p-4 rounded-b-lg absolute right-0 w-48">
            <Link href="/" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>About Me</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}