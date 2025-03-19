'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

type LinksProps = {
  links?: Link[];
  isFooter?: boolean;
};

export default function Links({ links = [], isFooter = false }: LinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
      case 'aws cloud practitioner':
      case 'prosci change manager':
      case 'credly':
        return faAward;
      default:
        return null;
    }
  };

  const getImage = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return (
          <Image
            src="https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png"
            alt="GitHub"
            width={isFooter ? 40 : 50}
            height={isFooter ? 40 : 50}
          />
        );
      case 'aws cloud practitioner':
        return (
          <Image
            src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/aws-cloud-practitioner-certification-prep/learn-about-the-aws-certified-cloud-practitioner-exam/images/8ef555de1a79ee04d46f669f807e8626_8-e-63168-f-d-72-f-4272-8994-6779-eec-75-ce-9.png"
            alt="AWS Cloud Practitioner"
            width={isFooter ? 40 : 50}
            height={isFooter ? 40 : 50}
          />
        );
      case 'prosci change manager':
        return (
          <Image
            src="https://images.credly.com/images/8a442ad3-10d8-46e4-9241-41b68cfb50a9/linkedin_thumb_VILT_Change_Practitioner_Certification_V2.png"
            alt="Prosci Change Practitioner"
            width={isFooter ? 75 : 95}
            height={isFooter ? 45 : 55}
          />
        );
      case 'credly':
        return (
          <Image
            src="https://cdn.player.fm/images/21281221/series/SyPIfO73CwJqTAo6/512.png"
            alt="Credly"
            width={isFooter ? 40 : 50}
            height={isFooter ? 40 : 50}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className={isFooter ? 'flex justify-center gap-12' : 'badge-social-section mb-8'}>
      {!isFooter && (
        <h2 className="text-2xl font-regular mb-2 text-center">Badge & Social Links</h2>
      )}
      <div
        className={
          isFooter
            ? 'flex justify-center gap-12'
            : 'flex justify-around items-center flex-wrap gap-4'
        }
      >
        {Array.isArray(links) && links.length > 0 ? (
          links.map((link) => {
            const icon = getIcon(link.icon);
            const image = getImage(link.icon);

            return (
              <a
                key={link._id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isFooter
                    ? 'p-3 transition-transform hover:scale-110'
                    : 'text-blue-600 hover:text-blue-800 transition-transform hover:scale-110 font-extralight p-2'
                }
                title={link.title}
              >
                {image ? (
                  image
                ) : icon ? (
                  <FontAwesomeIcon
                    icon={icon}
                    size={isFooter ? '3x' : '3x'}
                    className={isFooter ? 'hover:text-gray-300 transition-colors duration-300' : ''}
                  />
                ) : null}
              </a>
            );
          })
        ) : (
          <p>No links available</p>
        )}
      </div>
    </section>
  );
}