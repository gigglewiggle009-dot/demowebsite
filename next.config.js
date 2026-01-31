const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [],
     formats: ["image/avif", "image/webp"],
  },

  // Adding the standalone output configuration
  output: "standalone",

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
