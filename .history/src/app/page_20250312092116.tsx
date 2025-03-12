import { client } from '@/app/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faCertificate } from '@fortawesome/free-brands-svg-icons';

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
    <main className="max-w-4xl mx-auto p-4">
      {/* Profile */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Nicholas Shaffer</h1>
        <p className="text-gray-700">{profile.summary}</p>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Links</h2>
        <div className="flex gap-4">
          {links.map(link => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue