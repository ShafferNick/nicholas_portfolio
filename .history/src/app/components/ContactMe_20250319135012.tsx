'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Contact from './Contact';

export default function ContactMe() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <section className="contact-section">
        <div className="max-w-4xl mx-auto">
          <div className="contact-me cursor-pointer" onClick={openForm}>
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
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeForm}
          ></div>
          {/* Form container */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <Contact onClose={closeForm} />
          </div>
        </div>
      )}
    </>
  );
}