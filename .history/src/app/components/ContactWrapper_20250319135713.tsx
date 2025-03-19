'use client';
import React, { useState } from 'react';
import NavbarClient from './NavbarClient';
import ContactMe from './ContactMe';

type ContactWrapperProps = {
  children: React.ReactNode;
};

export default function ContactWrapper({ children }: ContactWrapperProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);

  return (
    <>
      <NavbarClient onContactClick={openForm} />
      <ContactMe onContactClick={openForm} />
      {children}
    </>
  );
}