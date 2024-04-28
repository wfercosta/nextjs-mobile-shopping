const hostnames = [
  "d3u1babc6tucfz.cloudfront.net",
  "nextjs-mobile-shopping.vercel.app",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: hostnames,
  },
};

export default nextConfig;
