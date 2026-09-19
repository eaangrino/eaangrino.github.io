import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  trailingSlash: true,
  allowedDevOrigins: ['hp15da0011la', 'hp15da0011la.local'],
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
