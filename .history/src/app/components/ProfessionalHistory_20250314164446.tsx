import React from 'react';

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
  return (
    <section className="professional-history-section py-16 bg-[#EFF0F3] animate-slide-in w-full">
      {/* Content constrained by parent */}
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">Professional History</h2>
        {jobs.map((job, index) => (
          <div key={job._id} className="mb-8 flex flex-col md:flex-row items-center gap-6 animate-slide-in">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl md:text-2xl font-medium mb-2">{job.title}</h3>
              <p className="mb-2">
                {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
              </p>
              <p>{job.description}</p>
            </div>
            <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-lg">
              {/* Placeholder for job-specific image */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}