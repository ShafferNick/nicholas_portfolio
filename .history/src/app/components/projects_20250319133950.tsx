'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { urlFor } from '@/app/sanityImageUrl';
import { SanityImageSource } from '@/app/types/sanity-types';

type Project = {
  _id: string;
  title: string;
  timeline: { startDate: string; endDate: string | null };
  summary: string;
  description: string[];
};

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="projects-section py-16 bg-[#EFF0F3] text-black animate-slide-in w-full">
      <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-left pt-8 md:pt-12">Professional Project Hi-lights</h2>
              <p className="text-sm italic">Here we have some key metrics from some of my hi-lighted projects in previous roles.</p>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project._id} className="px-2">
              <div className="bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col min-h-[400px] transition-transform duration-300 hover:shadow-xl">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="mb-2 text-sm italic">
                    {project.timeline.startDate} - {project.timeline.endDate || 'Present'}
                  </p>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <ul className="list-disc list-inside text-sm space-y-2 mb-6">
                    {project.description.map((desc, index) => (
                      <li key={index} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-auto">
                  {/* Placeholder for project image - you can add an image field to the schema if desired */}
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}