/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  plugins: ["tailwindcss", "postcss-preset-env"],
};
