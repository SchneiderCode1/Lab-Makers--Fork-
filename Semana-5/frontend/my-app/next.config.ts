/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ativa a exportação estática apenas quando a flag STATIC_EXPORT for 'true'
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : 'standalone',
};

export default nextConfig;