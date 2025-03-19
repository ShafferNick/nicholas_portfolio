'use client';
import React from 'react';

type EducationEntry = {
  _id: string;
  institution: string;
  major: string;
  gpa: number;
  activities: string[];
  dates: { startDate: string; endDate: string | null };
};

type EducationProps = {
  education: EducationEntry[];
};

export default function Education({ education }: EducationProps) {
  return (
    <section className="education-section py-16 bg-[#EFF0F3] text-black animate-slide-in w-full">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((entry) => (
              <div key={entry._id} className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{entry.institution}</h3>
                <p className="mb-2 text-sm italic">
                  {entry.major} | {entry.dates.startDate} - {entry.dates.endDate || 'Present'}
                </p>
                <p className="text-sm mb-2">GPA: {entry.gpa}</p>
                <ul className="list-disc list-inside text-sm space-y-2">
                  {entry.activities.map((activity, index) => (
                    <li key={index} className="leading-relaxed">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}