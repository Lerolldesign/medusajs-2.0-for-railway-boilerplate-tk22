const checkEnvVariables = require("./check-env-variables");

checkEnvVariables();

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
          ? process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL.replace("https://", "")
          : "",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  /* config options here */
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
};

export default nextConfig;
