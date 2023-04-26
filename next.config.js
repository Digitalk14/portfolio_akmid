/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const withLinaria = require("next-linaria");
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = 'portfolio_akmid';

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports =  withLinaria({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  assetPrefix: assetPrefix,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
});
