import { client } from '@/app/sanityClient';
import Links from './components/Links';
import Image from 'next/image';
import ProfessionalHistory from './components/ProfessionalHistory'; // Import the new component

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string;
  location: string;
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
  const jobs = await client.fetch<Job[]>(`*[_type == "job"] | order(dates.startDate desc)`);
  const links = await client.fetch<Link[]>(`*[_type == "link"]`);
  return { profile: profile[0], jobs, links };
}

export default async function Home() {
  const { profile, jobs, links } = await getData();

  return (
    <>
      {/* Hero Section - Custom Black Background */}
      <section className="hero-custom-black py-20 md:py-28 text-left animate-slide-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extralight mb-6" style={{ fontWeight: 200 }}>
            Nicholas Shaffer
          </h1>
          <div className="max-w-2xl mb-8">
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ fontWeight: 700 }}>
              Professional Summary
            </h3>
            <p className="text-base md:text-lg leading-relaxed font-extralight" style={{ fontWeight: 200 }}>
              {profile.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Badge & Social Links Section */}
      <section className="badge-social-section">
        <Links links={links} />
      </section>

      {/* Contact Section */}
      <section className="contact-section">
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
      </section>

      {/* Professional History Section */}
      <ProfessionalHistory jobs={jobs} /> {/* Use the new component */}

      {/* Projects Section - Light Gray Background */}
      <section className="py-16 bg-[#EFF0F3] text-black animate-slide-in">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate-slide-in">
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-medium">Project 1</h3>
              <p className="text-gray-600 mt-2">Coming Soon</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate-slide-in">
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-medium">Project 2</h3>
              <p className="text-gray-600 mt-2">Coming Soon</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg animate-slide-in">
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-medium">Project 3</h3>
              <p className="text-gray-600 mt-2">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}