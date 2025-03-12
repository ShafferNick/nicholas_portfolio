import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 sticky top-0 z-10 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Nicholas Shaffer</h1>
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About Me</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <button className="md:hidden text-white">
          {/* Mobile menu toggle (to be expanded later) */}
          ☰
        </button>
      </div>
    </nav>
  );
}