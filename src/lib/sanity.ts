// /lib/sanity.ts
// import { createClient } from 'next-sanity';

// export const client = createClient({
//   projectId: 'your-project-id', // Replace with your Sanity project ID
//   dataset: 'your-dataset-name', // Replace with your dataset name
//   apiVersion: '2021-03-25', // Keep this version
//   useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
// });


import { createClient } from "next-sanity";

export const client = createClient({
  projectId: '0jizi7pu',
  dataset: 'production',
  apiVersion: "2021-03-25", 
  useCdn: process.env.NODE_ENV === "production", 
});






