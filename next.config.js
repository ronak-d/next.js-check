// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: ["raw.githubusercontent.com"],
//         // port: "",
//         // pathname: "/account123/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};
