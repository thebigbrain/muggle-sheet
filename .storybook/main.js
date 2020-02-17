// your app's webpack.config.js
const custom = require("./webpack.config.js");

module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: config => {
    return {
      ...config
    };
  }
};
