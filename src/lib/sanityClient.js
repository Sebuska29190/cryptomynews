import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID, // musi być import.meta.env
  dataset: import.meta.env.VITE_SANITY_DATASET,      // musi być import.meta.env
  apiVersion: '2023-10-01',
  useCdn: true,
})
