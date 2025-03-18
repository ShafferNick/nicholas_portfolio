import { client } from '@/app/sanityClient';
import Image from 'next/image';
import Hero from './components/Hero';
import BadgeSocialLinks from './components/BadgeSocialLinks';
import ProfessionalHistory from './components/ProfessionalHistory';
import { SanityImageSource } from '@/app/types/sanity-types';
import { urlFor } from '@/app/sanityImageUrl'; // Updated to match subdirectory

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string[];
  location: string;
  companyLogo?: SanityImageSource;
};

type Profile = {
  _id: string;
  summary: string;
};

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

async function getData() {
  const profile = await client.fetch<Profile[]>(`*[_type == "profile"]`);
  const jobs = await client.fetch<Job[]>(
    `*[_type == "job"] {
      _id,
      title,
      dates,
      description,
      location,
      companyLogo {
        ...,
        asset->
      }
    } | order(dates.startDate desc)`
  );
  const links = await client.fetch<Link[]>(`*[_type == "link"]`);
  return { profile: profile[0], jobs, links };
}

export default async function Home() {
  const { profile, jobs, links } = await getData();

  return (
    <>
      {/* Hero Section */}
      <Hero summary={profile.summary} />

      {/* Badge & Social Links Section */}
      <BadgeSocialLinks links={links} />

      <section className="contact-section">
        <div className="max-w-4xl mx-auto">
          <div className="contact-me">
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

      {/* Professional History Section */}
      <ProfessionalHistory jobs={jobs} />

      {/* Projects Section - Light Gray Background */}
     
  );
}