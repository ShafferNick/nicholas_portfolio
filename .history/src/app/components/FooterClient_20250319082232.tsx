'use client';
import BadgeSocialLinks from './BadgeSocialLinks'; // Assuming this is the same as Links

type Link = {
  _id: string;
  title: string;
  url: string;
  icon: string;
};

type FooterClientProps = {
  links: Link[];
};

export default function FooterClient({ links }: FooterClientProps) {
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