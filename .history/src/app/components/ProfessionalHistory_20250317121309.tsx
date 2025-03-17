'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { urlFor } from '@/sanityImageUrl';

type Job = {
  _id: string;
  title: string;
  dates: { startDate: string; endDate: string | null };
  description: string[];
  location: string;
  companyLogo?: any;
};

type ProfessionalHistoryProps = {
  jobs: Job[];
};

export default function ProfessionalHistory({ jobs }: ProfessionalHistoryProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="professional-history-section py-16 bg-[#EFF0F3] animate-slide-in w-full">
      <div className="max-w-4xl mx-auto px-8 md:px-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">Professional History</h2>
              <p className="mb-2 text-sm">Below is a summary of my full work history, inclusive of all my work experience.</p>
        <Slider {...settings}>
          {jobs.map((job) => (
            <div key={job._id} className="px-2">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-[450px] transition-transform duration-300 hover:shadow-xl">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">{job.title}</h3>
                  <p className="mb-2 text-sm">
                    {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                  </p>
                  <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                    {job.description.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex justify-center">
                    {job.companyLogo ? (
                      <Image
                        src={urlFor(job.companyLogo).fit('max').width(200).url()} // Dynamic sizing with max fit
                        alt={`${job.title} company logo`}
                        width={200} // Default width
                        height={200} // Default height (aspect ratio maintained by fit('max'))
                        className="object-contain"
                        style={{ maxHeight: '100px' }} // Limit max height to avoid overflow
                      />
                    ) : (
                      <div className="h-32 w-32 bg-gray-300 rounded-lg"></div> // Adjusted placeholder size
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}