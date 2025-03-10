

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


export const client = createClient({
  projectId: "0jizi7pu", // Replace with your actual project ID
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
});

