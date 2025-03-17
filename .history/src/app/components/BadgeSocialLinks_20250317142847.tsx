'use client';
import React from 'react';
import Image from 'next/image';

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

type BadgeSocialLinksProps = {
  links: Link[];
};

export default function BadgeSocialLinks({ links }: BadgeSocialLinksProps) {
  return (
    <section className="badge-social-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="badge-social-header">Badge & Social Links</h2>
        <section className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a key={link._id} href={link.url} target="_blank" rel="noopener noreferrer">
              <Image src={`/icons/${link.icon}.svg`} alt={link.title} width={48} height={48} />
            </a>
          ))}
        </section>
      </div>
    </section>
  );
}