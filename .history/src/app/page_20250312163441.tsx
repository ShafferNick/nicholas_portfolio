import { client } from '@/app/sanityClient';
import Links from './components/Links';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

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
    <div className="min-h-screen flex flex-col mx-4">
      <main className="flex-grow">
        {/* Hero Section - Custom Black Background */}
        <section className="hero-custom-black py-16 md:py-24 text-left animate-slide-in">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extralight mb-4" style={{ fontWeight: 200 }}>Nicholas Shaffer</h1>
            <div className="max-w-2xl">
              <h3 className="text-sm md:text-base font-regular mb-2" style={{ fontWeight: 700 }}>Professional Summary</h3>
              <p className="text-sm md:text-base leading-relaxed">{profile.summary}</p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm md:text-base font-semibold transition-colors animate-slide-in float-right"
            >
              Contact Me <PaperAirplaneIcon className="inline-block w-4 h-4 ml-2" />
            </a>
            <div className="mt-8 clear-both">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-400 mx-auto md:mx-0 rounded-full overflow-hidden animate-slide-in">
                <Image
                  src="https://via.placeholder.com/256"
                  alt="Placeholder"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional History - Light Gray Background */}
        <section className="py-16 bg-[#EFF0F3] animate-slide-in">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-black">Professional History</h2>
            {jobs.map((job, index) => (
              <div key={job._id} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 animate-slide-in`}>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-medium mb-2 text-black">{job.title}</h3>
                  <p className="text-black mb-2">
                    {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                  </p>
                  <p className="text-black">{job.description}</p>
                </div>
                <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-lg">
                  {/* Placeholder for job-specific image */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links (Social Links) - Light Gray Background */}
        <section className="py-16 bg-[#EFF0F3] text-black animate-slide-in">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Links</h2>
            <Links links={links} />
          </div>
        </section>

        {/* Projects Section - Light Gray Background */}
        <section className="py-16 bg-[#EFF0F3] text-black animate-slide-in">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
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
      </main>
    </div>
  );
}