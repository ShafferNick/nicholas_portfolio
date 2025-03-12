'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10 shadow-md mx-4">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="hidden md:flex w-full">
          <div className="flex w-full">
            <div className="flex-1 min-w-[120px] text-center">
              <Link href="/" className="hover:text-gray-300 transition-colors text-base font-extralight block" style={{ fontWeight: 200 }}>
                Home
              </Link>
            </div>
            <div className="flex-1 min-w-[120px] text-center">
              <Link href="/about" className="hover:text-gray-300 transition-colors text-base font-extralight block" style={{ fontWeight: 200 }}>
                About Me
              </Link>
            </div>
            <div className="flex-1 min-w-[120px] text-center">
              <Link href="/contact" className="hover:text-gray-300 transition-colors text-base font-extralight block" style={{ fontWeight: 200 }}>
                Contact
              </Link>
            </div>
          </div>
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
        <div className="md:hidden flex flex-col items-center justify-center space-y-4 bg-gray-800 p-4 rounded-b-lg mx-4">
          <Link href="/" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }} onClick={() => setIsOpen(false)}>
            About Me
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}