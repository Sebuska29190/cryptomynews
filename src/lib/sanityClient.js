// src/lib/sanityClient.js
import { createClient } from '@sanity/client'

let client = null;
try {
  client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2023-10-01',
    useCdn: true,
  });
} catch (error) {
  console.error('Failed to create Sanity client:', error);
}

export { client }
