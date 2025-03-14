import React from 'react';
import Links from './Links';

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
      <Links links={links} />
    </section>
  );
}