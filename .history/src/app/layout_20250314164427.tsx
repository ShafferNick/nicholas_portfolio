import './globals.css';
import type { Metadata } from 'next';
import NavbarClient from './components/NavbarClient';
import FooterClient from './components/FooterClient';

export const metadata: Metadata = {
  title: "Nicholas Shaffer Portfolio",
  description: "Portfolio of Nicholas Shaffer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        {/* Navbar */}
        <NavbarClient />

        {/* Main Content */}
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto px-8 md:px-12" style={{ padding: '1.5rem 3rem' }}>
            {children}
          </div>
        </main>

        {/* Footer */}
        <FooterClient />
      </body>
    </html>
  );
}