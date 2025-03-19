import { client } from '@/app/sanityClient';
import Image from 'next/image';
import Hero from './components/Hero';
import Links from './components/Links';
import ProfessionalHistory from './components/ProfessionalHistory';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactMe from './components/ContactMe';
import FooterClient from './components/FooterClient';
import { SanityImageSource } from '@/app/types/sanity-types';

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string[];
  location: string;
  companyLogo?: SanityImageSource;
};

type Project = {
  _id: string;
  title: string;
  timeline: { startDate: string; endDate: string | null };
  summary: string;
  description: string[];
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

type EducationEntry = {
  _id: string;
  institution: string;
  major: string;
  gpa: number;
  activities: string[];
  dates: { startDate: string; endDate: string | null };
};

async function getData() {
  try {
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
    const projects = await client.fetch<Project[]>(
      `*[_type == "project"] {
        _id,
        title,
        timeline,
        summary,
        description
      } | order(timeline.startDate desc)`
    );
    const links = await client.fetch<Link[]>(`*[_type == "link"]`);
    const education = await client.fetch<EducationEntry[]>(
      `*[_type == "education"] {
        _id,
        institution,
        major,
        gpa,
        activities,
        dates
      } | order(dates.startDate desc)`
    );
    console.log('Fetched links in getData:', links);
    console.log('Fetched education in getData:', education);
    return { profile: profile[0], jobs, projects, links, education };
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return { profile: { _id: '', summary: '' }, jobs: [], projects: [], links: [], education: [] };
  }
}

export default async function Home() {
  const data = await getData();
  const { profile, jobs, projects, links, education } = data;

  console.log('Links in Home (before rendering):', links);
  console.log('Education in Home (before rendering):', education);

  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <>
      {/* Hero Section */}
      <Hero summary={profile.summary} />

      {/* Badge & Social Links Section */}
      <Links links={safeLinks} />

      {/* Contact Me Section */}
      <ContactMe onContactClick={() => {}} />

      {/* Professional History Section */}
      <ProfessionalHistory jobs={jobs} />

      {/* Projects Section */}
      <Projects projects={projects} />

      {/* Education Section */}
      <Education education={education} />

      {/* Footer Section */}
      <FooterClient links={safeLinks} />
    </>
  );
}