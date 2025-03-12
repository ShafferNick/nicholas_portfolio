import { createClient } from '@sanity/client';

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Check .env.local or Vercel env variables.');
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03', // Fixed to a valid version
  useCdn: true,
});