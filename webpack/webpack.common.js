const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const dotenv = require('dotenv');

const DIST_DIR = path.join(__dirname, '../dist');
const SRC_DIR = './src';
const env = dotenv.config().parsed || {};
const envKeys = Object.keys(env).reduce((accumulator, current) => {
  accumulator[`process.env.${current}`] = JSON.stringify(env[current]);
  return accumulator;
}, {});

module.exports = {
  entry: {
    index: `${SRC_DIR}/index.ts`,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [SRC_DIR, 'node_modules'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      inject: 'body',
    }),
    new webpack.DefinePlugin(envKeys),
    new CheckerPlugin(),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'redux-saga': 'ReduxSaga',
  },
};
