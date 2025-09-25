import type { NextConfig } from "next";

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/events/",
//         destination: "http://127.0.0.1:5000/api/home",
//       },
//     ];
//   },
// };

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://localhost:3000"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bytegrad.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
