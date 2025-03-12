import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 p-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2">© 2025 Nicholas Shaffer</p>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/nicholas-shaffer-a22042206/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span> {/* Placeholder, replace with icon if needed */}
          </a>
          <a href="https://github.com/ShafferNick" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
          <a href="https://www.credly.com/users/nickshaffer" target="_blank" rel="noopener noreferrer">
            <span>Credly</span>
          </a>
        </div>
      </div>
    </footer>
  );
}