'use client';
import React, { useState } from 'react';
import NavbarClient from './NavbarClient';
import ContactMe from './ContactMe';
import Contact from './Contact';

type ContactWrapperProps = {
  children: React.ReactNode;
};

export default function ContactWrapper({ children }: ContactWrapperProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <NavbarClient onContactClick={openForm} />
      <ContactMe onContactClick={openForm} />
      {children}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
            <Contact onClose={closeForm} />
          </div>
        </div>
      )}
    </>
  );
}