'use client'; // Add this since react-slick requires client-side rendering
import React from 'react';
import Slider from 'react-slick';

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string;
  location: string;
};

type ProfessionalHistoryProps = {
  jobs: Job[];
};

export default function ProfessionalHistory({ jobs }: ProfessionalHistoryProps) {
  // Settings for react-slick carousel
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through cards infinitely
    speed: 500, // Transition speed
    slidesToShow: 3, // Default: 3 cards on large screens
    slidesToScroll: 1, // Scroll one card at a time
    arrows: true, // Show next/prev arrows
    responsive: [
      {
        breakpoint: 1024, // Medium screens (<1024px)
        settings: {
          slidesToShow: 2, // Show 2 cards
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile screens (<768px)
        settings: {
          slidesToShow: 1, // Show 1 card
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="professional-history-section py-16 bg-[#EFF0F3] animate-slide-in w-full">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">Professional History</h2>
        <Slider {...settings}>
          {jobs.map((job) => (
            <div key={job._id} className="px-2">
              {/* Card container */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-[400px] transition-transform duration-300 hover:shadow-xl">
                {/* Job Details */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{job.title}</h3>
                  <p className="mb-2 text-sm">
                    {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                  </p>
                  <p className="text-sm">{job.description}</p>
                </div>
                {/* Placeholder Image */}
                <div className="mt-4 h-32 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}