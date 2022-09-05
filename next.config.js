/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
