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
    variableWidth: false,
    adaptiveHeight: false,
  };

  return (
    <section className="professional-history-section py-16 bg-[#EFF0F3] animate-slide-in w-full">
      <div className="max-w-4xl mx-auto px-8 md:px-12 overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-bold mb-3 text-left">
          Professional History        </h2>

          <p className="text-sm italic mt-2">Below is a summary of my full work history, inclusive of all my work experience.</p>
        <div className="relative w-full">
          <Slider {...settings}>
            {jobs.map((job) => (
              <div key={job._id} className="w-full">
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-[400px] transition-transform duration-300 hover:shadow-xl">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{job.title}</h3>
                    <p className="mb-2 text-sm italic">
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
                          src={urlFor(job.companyLogo).fit('max').width(200).url()}
                          alt={`${job.title} company logo`}
                          width={200}
                          height={200}
                          className="object-contain"
                          style={{ maxHeight: '120px' }}
                        />
                      ) : (
                        <div className="h-32 w-32 bg-gray-300 rounded-lg"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}