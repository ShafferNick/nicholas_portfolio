'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarClientProps = {
  onContactClick: () => void;
};

export default function NavbarClient({ onContactClick }: NavbarClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Resume', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#', onClick: onContactClick },
    { name: 'Projects', href: '/projects' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Nicholas Shaffer</div>

        {/* Desktop Menu */}
        <div className="desktop-menu hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active-link' : ''}`}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-900 p-4 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMobileMenu}
            className="close-button text-white text-2xl"
            aria-label="Close mobile menu"
          >
            ×
          </button>
          <div className="flex flex-col space-y-4 mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white text-lg ${pathname === link.href ? 'active-link' : ''}`}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                    toggleMobileMenu();
                  } else {
                    toggleMobileMenu();
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}