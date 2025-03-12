import './globals.css';
import './fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faAward } from '@fortawesome/free-solid-svg-icons';
import type { Metadata } from 'next';
import NavbarClient from './components/NavbarClient'; // Use the client component

export const metadata: Metadata = {
  title: "Nicholas Shaffer Portfolio",
  description: "Portfolio of Nicholas Shaffer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Navbar */}
        <NavbarClient /> {/* Render the client-side navbar */}

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