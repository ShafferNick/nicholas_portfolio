import type { Metadata } from "next";
import { GeistSans, GeistMono } from "next/font/google"; // Corrected import names
import "./globals.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

// Configure fonts
const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Nicholas Shaffer</h1>
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
        <main className={`${geistSans.variable} ${geistMono.variable} flex-grow max-w-4xl mx-auto p-4 antialiased`}>
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
