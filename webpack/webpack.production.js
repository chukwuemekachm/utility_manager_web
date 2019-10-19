const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
