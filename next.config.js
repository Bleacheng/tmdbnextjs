// next.config.js
module.exports = {
  reactStrictMode: true, // Enable strict mode for React

  // Customizing webpack configuration
  webpack: (config, { isServer }) => {
    // Add a custom plugin to the webpack configuration
    if (isServer) {
      // Only apply this plugin on the server-side
      const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
      config.plugins.push(new MomentLocalesPlugin());
    }

    return config;
  },

  // Configuring asset prefixes for static files
  assetPrefix: '/my-app/', // Set the base path for static assets

  // Adding redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // ... Add more configuration options as needed
};
