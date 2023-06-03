/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: ["tailwindcss", "postcss-preset-env"],
};

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
