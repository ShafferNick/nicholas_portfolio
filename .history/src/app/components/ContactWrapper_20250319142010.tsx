'use client';
import React, { useState } from 'react';
import NavbarClient from './NavbarClient';
import ContactMe from './ContactMe';
import Contact from './Contact';
import Hero from './Hero';
import Links from './Links';
import ProfessionalHistory from './ProfessionalHistory';
import Projects from './Projects';
import Education from './Education';
import FooterClient from './FooterClient';

type ContactWrapperProps = {
  children?: React.ReactNode;
  profileSummary: string;
  links: any[];
  jobs: any[];
  projects: any[];
  education: any[];
};

export default function ContactWrapper({
  children,
  profileSummary,
  links,
  jobs,
  projects,
  education,
}: ContactWrapperProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    console.log('Opening form');
    setIsFormOpen(true);
  };

  const closeForm = () => {
    console.log('Closing form');
    setIsFormOpen(false);
  };

  console.log('isFormOpen state:', isFormOpen); // Debug log

  return (
    <>
      <NavbarClient onContactClick={openForm} />
      <Hero summary={profileSummary} />
      <Links links={links} />
      <ContactMe onContactClick={openForm} />
      <ProfessionalHistory jobs={jobs} />
      <Projects projects={projects} />
      <Education education={education} />
      <FooterClient links={links} />
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