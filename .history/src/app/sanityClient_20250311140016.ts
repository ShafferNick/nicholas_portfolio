import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '9uhrmoxg', // Replace with your Sanity project ID
  dataset: 'production', // Replace if your dataset is different
  apiVersion: '2025-03-01', // Use a recent version
  useCdn: true, // Faster, cached responses
});