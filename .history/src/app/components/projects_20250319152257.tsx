'use client';
import React from 'react';
import Slider from 'react-slick';

type Project = {
  _id: string;
  title: string;
  timeline: { startDate: string; endDate: string | null };
  summary: string;
  description: string[];
};

type ProjectsProps = {
  projects: Project[] | undefined;
};

export default function Projects({ projects = [] }: ProjectsProps) {
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
    <section className="projects-section py-8 bg-[#EFF0F3] text-black animate-slide-in w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left mb-12">Projects</h2>
        <Slider {...settings}>
          {Array.isArray(projects) && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="px-2">
                <div className="bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col min-h-[350px] transition-transform duration-300 hover:shadow-xl">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium mb-2">{project.title}</h3>
                    <p className="mb-2 text-sm italic">
                      {project.timeline.startDate} - {project.timeline.endDate || 'Present'}
                    </p>
                    <p className="text-gray-600 mb-4">{project.summary}</p>
                    <ul className="list-disc list-inside text-sm space-y-1 mb-6">
                      {project.description.map((desc, index) => (
                        <li key={index} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-2">
              <p>No projects available.</p>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
}