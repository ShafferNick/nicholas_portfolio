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

type Education = {
  _id: string;
  institution: string;
  major: string;
  gpa: number | null;
  activities: string[];
  dates: { startDate: string; endDate: string | null };
};

type Entrepreneurship = {
  _id: string;
  ventureName: string;
  dates: { startDate: string; endDate: string | null };
  description: string;
};

type Profile = {
  _id: string;
  summary: string;
};

type Skill = {
  _id: string;
  category: string;
  description: string;
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
  const education = await client.fetch<Education[]>(`*[_type == "education"] | order(dates.startDate desc)`);
  const entrepreneurship = await client.fetch<Entrepreneurship[]>(`*[_type == "entrepreneurship"] | order(dates.startDate desc)`);
  const skills = await client.fetch<Skill[]>(`*[_type == "skill"]`);
  const links = await client.fetch<Link[]>(`*[_type == "link"]`);
  return { profile: profile[0], jobs, education, entrepreneurship, skills, links };
}

export default async function Home() {
  const { profile, jobs, education, entrepreneurship, skills, links } = await getData();

return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-800 py-20 text-center animate-slide-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nicholas Shaffer</h1>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl mb-4">Professional Summary</h3>
            <p className="text-lg md:text-xl">{profile.summary}</p>
          </div>
          <a href="/contact" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full animate-slide-in">
            Contact Me <span className="ml-2">✈️</span>
          </a>
          <div className="mt-10">
            <div className="w-64 h-64 bg-gray-700 mx-auto rounded-full overflow-hidden animate-slide-in">
              {/* Placeholder for image */}
            </div>
          </div>
        </section>

        {/* Professional History */}
        <section className="py-16 bg-gray-700 animate-slide-in">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Professional History</h2>
            {jobs.map(job => (
              <div key={job._id} className="mb-6">
                <h3 className="text-xl md:text-2xl font-medium">{job.title}</h3>
                <p className="text-gray-300">
                  {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                </p>
                <p className="text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
      </section>
      
            {/* Links (Social Links) */}
        <section className="py-16 bg-gray-800 animate-slide-in">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Professional Links</h2>
            <Links links={links} />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-700 animate-slide-in">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for future projects */}
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium">Project 1</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium">Project 2</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
              <div className="bg-gray-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium">Project 3</h3>
                <p className="text-gray-400 mt-2">Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
    