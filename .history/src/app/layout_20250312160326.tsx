import './globals.css';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';
import Link from 'next/link'; // Add this import

export const metadata: Metadata = {
  title: "Nicholas Shaffer Portfolio",
  description: "Portfolio of Nicholas Shaffer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen mx-4">
        {/* Navbar */}
        <nav className="bg-gray-900 p-4 sticky top-0 z-10 shadow-md">
          <div className="max-w-6xl mx-auto">
            <div className="hidden md:grid grid-cols-3 gap-12 justify-items-center">
              <Link href="/" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }}>
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }}>
                About Me
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors text-base font-extralight" style={{ fontWeight: 200 }}>
                Contact
              </Link>
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

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 p-4 text-center">
          <div className="max-w-6xl mx-auto">
            <p className="mb-2">© 2025 Nicholas Shaffer</p>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/nicholas-shaffer-a22042206/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-gray-300" />
              </a>
              <a href="https://github.com/ShafferNick" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" className="hover:text-gray-300" />
              </a>
              <a href="https://www.credly.com/users/nickshaffer" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.player.fm/images/21281221/series/SyPIfO73CwJqTAo6/512.png"
                  alt="Credly"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}