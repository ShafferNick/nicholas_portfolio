'use client';
import React from 'react';
import Image from 'next/image';

type ContactMeProps = {
  onContactClick: () => void;
};

export default function ContactMe({ onContactClick }: ContactMeProps) {
  const handleClick = () => {
    console.log('Contact Me button clicked');
    onContactClick();
  };

  return (
    <section className="contact-section">
      <div className="max-w-4xl mx-auto">
        <div className="contact-me cursor-pointer" onClick={handleClick}>
          <span>Contact Me</span>
          <Image
            src="/paper-plane-svgrepo-com.svg"
            alt="Contact Icon"
            width={24}
            height={24}
            className="contact-icon"
          />
        </div>
      </div>
    </section>
  );
}