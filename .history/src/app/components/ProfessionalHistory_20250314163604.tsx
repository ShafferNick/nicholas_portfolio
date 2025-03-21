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
    <section className="py-16 bg-[#EFF0F3] width=100% animate-slide-in">
      {/* Outer div with full-width background */}
      <div className="w-full">
        {/* Inner div to constrain content */}
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left text-black">Professional History</h2>
          {jobs.map((job, index) => (
            <div key={job._id} className="mb-8 flex flex-col md:flex-row items-center gap-6 animate-slide-in">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl md:text-2xl font-medium mb-2 text-black">{job.title}</h3>
                <p className="text-black mb-2">
                  {job.dates.startDate} - {job.dates.endDate || 'Present'} | {job.location}
                </p>
                <p className="text-black">{job.description}</p>
              </div>
              <div className="w-full md:w-1/2 h-48 bg-gray-300 rounded-lg">
                {/* Placeholder for job-specific image */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}