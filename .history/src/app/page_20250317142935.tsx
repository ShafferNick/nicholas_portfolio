import { client } from '@/sanityClient';
import Image from 'next/image';
import Hero from './components/Hero'; // Updated import
import BadgeSocialLinks from './components/BadgeSocialLinks';
import ProfessionalHistory from './components/ProfessionalHistory';

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string[]; // Updated to array of strings
  location: string;
  companyLogo?: any; // Added companyLogo field
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
      {/* Hero Section */}
      <Hero summary={profile.summary} /> {/* Updated usage */}

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
      <section className="py-16 bg-[#EFF0F3] text-black animate-slide-in">
        <div className="max-w-4xl mx-auto px-8 md:px-12">
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