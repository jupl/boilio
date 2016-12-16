const {find} = require('globule')
const {basename, extname} = require('path')
const {CommonsChunkPlugin} = require('webpack').optimize
const {resolve} = require('./util')

/**
 * @typedef {Object} BaseOptions
 * @property {string} source Source path to read source code from
 * @property {string} destination Destination path to write assets out
 */

/**
 * Build base Webpack configuration with defaults that can be expanded upon
 * @param {BaseOptions} options Options
 * @return {Object} Webpack configuration
 */
module.exports = ({source, destination}) => {
  const config = {
    entry: entries(source),
    output: {
      path: resolve(destination),
      filename: '[name].js',
      publicPath: '/',
    },
    module: {
      loaders: [
        {test: /\.jsx?$/, loader: 'babel-loader'},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.(gif|jpg|jpeg|png|svg)$/, loader: 'file-loader'},
      ],
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.json',
      ],
    },
    plugins: [],
  }

  // If there are more than one generated JS files, create a file that contains
  // shared code among all generated JS files called common.js
  if(Object.keys(config.entry).length > 1) {
    config.plugins = [
      ...config.plugins,
      new CommonsChunkPlugin({name: 'common'}),
    ]
  }

  return config
}

/**
 * Build entries configuration for Webpack based on our app structure by
 * looking for all top-level JS files in source to compile
 * @param {string} source Source directory
 * @return {Object} Entries configuration for Webpack
 */
function entries(source) {
  const files = find(resolve(source, '*.{js,jsx}'))
  return files
    .map(file => ({file, base: basename(file, extname(file))}))
    .reduce((obj, {base, file}) => Object.assign(obj, {[base]: [file]}), {})
}
