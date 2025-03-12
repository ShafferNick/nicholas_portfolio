'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

export default function FooterClient() {
  return (
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
  );
}