import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'via.placeholder.com',           // For the placeholder image in page.tsx
      'res.cloudinary.com',            // For AWS Cloud Practitioner image in Links.tsx
      'images.credly.com',            // For Prosci Change Manager image in Links.tsx
      'cdn.player.fm',                // For Credly image in Links.tsx
      'static-00.iconduck.com',       // For GitHub image in Links.tsx
      'static.vecteezy.com',          // For banner image in Hero Section page.tsx
      'cdn.sanity.io',               // For Sanity images
    ],
  },
};

export default nextConfig;
