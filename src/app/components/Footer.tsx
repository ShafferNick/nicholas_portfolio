import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
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
  );
}