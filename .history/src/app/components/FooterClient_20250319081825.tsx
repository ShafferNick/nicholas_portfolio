'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

export default function FooterClient() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center w-full">
      <div className="flex flex-col items-center gap-4">
        <p>© 2025 Nicholas Shaffer</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/nicholas-shaffer-a22042206/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="hover:text-gray-300 transition-colors duration-300" />
          </a>
          <a href="https://www.credly.com/users/nickshaffer" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faAward} size="lg" className="hover:text-gray-300 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}