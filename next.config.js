/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/vet-otvet' : '';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },

  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true
  }
};

module.exports = nextConfig;
