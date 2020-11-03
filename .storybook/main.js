module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (baseConfig) => {
    // const nextConfig = require("../next.config.js");

    // merge whatever from nextConfig into the webpack config storybook will use
    return { ...baseConfig };
  },
};
