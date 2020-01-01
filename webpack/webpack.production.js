const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    noEmitOnErrors: true,
    namedModules: true,
    namedChunks: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        sourceMap: true,
        extractComments: 'all',
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
};
