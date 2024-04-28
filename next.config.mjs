import { hostname } from "os";

const hostnames = ["d3u1babc6tucfz.cloudfront.net"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
