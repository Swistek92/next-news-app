/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dailymail.co.uk", "static.independent.co.uk"],
  },
};
