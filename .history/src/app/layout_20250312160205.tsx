import './globals.css';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';

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
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <ul className="flex gap-6">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">About Me</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
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