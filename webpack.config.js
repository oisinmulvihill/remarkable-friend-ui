//
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VERSION = require('./package.json').version;

const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'rmfriendui/static');
const SASS_PATH = path.resolve(SRC, 'sass');
const extractSass = new ExtractTextPlugin({
  //filename: '[name].[contenthash].css',
  filename: '[name].css'
});


module.exports = {
  mode: 'development',
  entry: path.resolve(SRC, 'index.jsx'),
  output: {
      // filename: 'app.bundle.[hash].js',
      filename: 'app.bundle.js',
      path: DIST
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [SASS_PATH]
                }
              }
            ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(SRC, 'index_template.html')
    }),
    new webpack.DefinePlugin({
        VERSION: JSON.stringify(VERSION)
    }),
    extractSass
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
