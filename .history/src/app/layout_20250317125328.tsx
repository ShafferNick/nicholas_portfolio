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
      <body className="flex flex-col min-h-screen w-full overflow-x-hidden" suppressHydrationWarning>
        {/* Navbar */}
        <NavbarClient />

        {/* Main Content - Full width with overflow control */}
        <main className="flex-grow w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <FooterClient />
      </body>
    </html>
  );
}