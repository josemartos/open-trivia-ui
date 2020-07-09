const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Module resolver
    config.resolve.extensions = ['.js', '.json', 'png', 'svg'];
    config.resolve.alias['src'] = path.join(__dirname, './src');
    config.resolve.alias['pages'] = path.join(__dirname, './pages');
    config.resolve.alias['assets'] = path.join(__dirname, './public/assets');

    return config;
  },
});
