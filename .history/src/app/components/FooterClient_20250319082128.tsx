'use client';
import Links from './components/Links';

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

export default function FooterClient() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center w-full">
      <div className="flex flex-col items-center gap-4">
        <p>© 2025 Nicholas Shaffer</p>
        <div className="flex justify-center gap-6">
      {/* Badge & Social Links Section */}
      <BadgeSocialLinks links={links} />
        </div>
      </div>
    </footer>
  );
}