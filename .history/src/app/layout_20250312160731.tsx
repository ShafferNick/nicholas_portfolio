import './globals.css';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faAward } from '@fortawesome/free-solid-svg-icons'; // Corrected import for faAward
import type { Metadata } from 'next';
import Link from 'next/link'; // Add this for internal navigation
import { useState } from 'react'; // Add this for mobile menu state

export const metadata: Metadata = {
  title: "Nicholas Shaffer Portfolio",
  description: "Portfolio of Nicholas Shaffer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
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
              <div className="md:hidden flex flex-col items-center justify-center space-y-4 bg-gray-800 p-4 rounded-b-lg">
                <Link href="/" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>About Me</Link>
                <Link href="/contact" className="hover:text-gray-300 transition-colors block w-full text-center" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow max-w-4xl mx-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p>© 2025 Nicholas Shaffer</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/nicholas-shaffer-a22042206/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-gray-300" />
              </a>
              <a href="https://www.credly.com/users/nickshaffer" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faAward} size="lg" className="hover:text-gray-300" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}