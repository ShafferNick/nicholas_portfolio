import { client } from '@/app/sanityClient';
import { SanityImageSource } from '@/types/sanity-types';
import ContactWrapper from './components/ContactWrapper';

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
    console.log('Fetched profile in getData:', profile);
    console.log('Fetched jobs in getData:', jobs);
    console.log('Fetched projects in getData:', projects);
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

  console.log('Profile in Home:', profile);
  console.log('Jobs in Home:', jobs);
  console.log('Projects in Home:', projects);
  console.log('Links in Home:', links);
  console.log('Education in Home:', education);

  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <ContactWrapper
      profileSummary={profile.summary}
      links={safeLinks}
      jobs={jobs || []}
      projects={projects || []}
      education={education || []}
    />
  );
}