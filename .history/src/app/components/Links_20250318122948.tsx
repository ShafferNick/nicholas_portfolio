'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

export default function Links({ links }: { links: Link[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-regular mb-2">Badge & Social Links</h2>
      <div className="flex justify-around items-center flex-wrap gap-4">
        {links.map(link => (
          <a
            key={link._id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110 font-extralight"
            title={link.title}
          >
            {link.icon === 'linkedin' ? (
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            ) : link.icon === 'GitHub' ? (
              <Image
                src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png"
                alt="GitHub"
                width={50}
                height={50}
              />
            ) : link.icon === 'AWS Cloud Practitioner' ? (
              <Image
                src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-practitioner-certification-prep/learn-about-the-aws-certified-cloud-practitioner-exam/images/8ef555de1a79ee04d46f669f807e8626_8-e-63168-f-d-72-f-4272-8994-6779-eec-75-ce-9.png"
                alt="AWS Cloud Practitioner"
                width={50}
                height={50}
              />
            ) : link.icon === 'Prosci Change Manager' ? (
              <Image
                src="https://images.credly.com/images/8a442ad3-10d8-46e4-9241-41b68cfb50a9/linkedin_thumb_VILT_Change_Practitioner_Certification_V2.png"
                alt="Prosci Change Practitioner"
                width={85}
                height={55}
              />
            ) : link.icon === 'credly' ? (
              <Image
                src="https://cdn.player.fm/images/21281221/series/SyPIfO73CwJqTAo6/512.png"
                alt="Credly"
                width={50}
                height={50}
              />
            ) : null}
          </a>
        ))}
      </div>
    </section>
  );
}