/** @type {import('next').NextConfig} */



// const nextConfig = {
//     images: {
//       domains: ["cdn.sanity.io"], // Add the domain serving your images
//     },
//   };
  
//   export default nextConfig;


  /** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Replace with the correct domain
      },
    ],
  },
};

export default nextConfig;

  