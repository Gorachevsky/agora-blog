/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  plugins: ["tailwindcss", "postcss-preset-env"],
};
