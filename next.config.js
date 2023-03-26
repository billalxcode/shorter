/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    SHORTER_BASE_PATH: "https://google.com"
  }
}

module.exports = nextConfig
