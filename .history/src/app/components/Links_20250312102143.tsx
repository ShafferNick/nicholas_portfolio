'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
      <div className="flex gap-4 items-center">
        {links.map(link => (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            title={link.title}
          >
            {link.icon === 'linkedin' ? (
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            ) : link.icon === 'github' ? (
              <FontAwesomeIcon icon={faGithub} size="2x" />
            ) : link.icon === 'aws' ? (
              <img
                src="https://training.totalcyber.com/wp-content/uploads/2022/04/could_practitioner-1-600x284.png"
                alt="AWS Cloud Practitioner"
                width={40}
                height={40}
              />
            ) : link.icon === 'prosci' ? (
              <img
                src="https://images.credly.com/images/18808a86-8b2f-4706-acfe-65129fedf2cc/linkedin_thumb_Change_Practitioner.png"
                alt="Prosci Change Practitioner"
                width={40}
                height={40}
              />
            ) : link.icon === 'credly' ? (
              <img
                src="https://cdn.player.fm/images/21281221/series/SyPIfO73CwJqTAo6/512.png" // Replace with ImgBB URL
                alt="Credly"
                width={40}
                height={40}
              />
            ) : null}
          </a>
        ))}
      </div>
    </section>
  );
}