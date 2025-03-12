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
    