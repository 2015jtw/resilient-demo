/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "s.w.org",
      "assets.aceternity.com",
      "algochurn.com",
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
