const hostnames = [
  "d1foq43mo0xvfa.cloudfront.net",
  "nextjs-mobile-shopping.vercel.app",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: hostnames,
  },
};

export default nextConfig;
