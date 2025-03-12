import { client } from '@/app/sanityClient';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Links from './components/Links';

// Define types for your Sanity data
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

// Fetch data from Sanity
async function getData() {
  const profile = await client.fetch<Profile[]>(`*[_type == "profile"]`);
  const jobs = await client.fetch<Job[]>(`*[_type == "job"] | order(dates.startDate desc)`);
  const links = await client.fetch<Link[]>(`*[_type == "link"]`);
  return { profile: profile[0], jobs, links };
}

export default async function Home() {
  const { profile, jobs, links } = await getData();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black py-16 md:py-24 text-left animate-slide-in">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Nicholas Shaffer</h1>
            <div className="max-w-2xl">
              <h3 className="text-sm md:text-base font-semibold mb-2">Professional Summary</h3>
              <p className="text-sm md:text-base leading-relaxed">{profile.summary}</p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm md:text-base font-semibold transition-colors animate-slide-in float-right"
            >
              Contact Me <span className="ml-2">✈️</span>
            </a>
            <div className="mt-8 clear-both">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-400 mx-auto md:mx-0 rounded-full overflow-hidden animate-slide-in">
                {/* Random placeholder image */}
                <img
                  src="https://via.placeholder.com/256"
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Professional History */}
        <section className="py-16 bg-gray-700 animate-slide-in">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional History</h2>
            {jobs.map((job, index) => (
              <div key={job._id} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 animate-slide-in`}>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{job.title}</h3>
                  <p className="text-gray-300 mb-2">
                    {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                  </p>
                  <p className="text-gray-400">{job.description}</p>
                </div>
                <div className="w-full md:w-1/2 h-48 bg-gray-600 rounded-lg">
                  {/* Placeholder for job-specific image */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Links (Social Links) */}
        <section className="py-16 bg-gray-800 animate-slide-in">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Links</h2>
            <Links links={links} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-700 animate-slide-in">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg animate-slide-in">
                <div className="w-full h-40 bg-gray-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium">Project 1</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg animate-slide-in">
                <div className="w-full h-40 bg-gray-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium">Project 2</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg animate-slide-in">
                <div className="w-full h-40 bg-gray-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium">Project 3</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
    