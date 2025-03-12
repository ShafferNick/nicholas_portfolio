'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

export default function Links({ links }: { links: Link[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Links</h2>
      <div className="flex gap-4">
        {links.map(link => (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            title={link.title}
          >
            <FontAwesomeIcon icon={link.icon === 'linkedin' ? faLinkedin : faAward} size="2x" />
          </a>
        ))}
      </div>
    </section>
  );
}