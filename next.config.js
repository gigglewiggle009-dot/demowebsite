<<<<<<< HEAD
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

=======
const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    domains: [],
    formats: ["image/avif", "image/webp"],
  },

  output: "standalone",

  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/project",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/aboutus",
        permanent: true,
      },
      {
        source: "/clients",
        destination: "/client",
        permanent: true,
      },
    ];
  },

>>>>>>> e3da751 (Add latest code)
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
<<<<<<< HEAD
      }),
=======
      })
>>>>>>> e3da751 (Add latest code)
    );

    return config;
  },
};

module.exports = nextConfig;
