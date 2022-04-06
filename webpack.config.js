const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: 'only',
    hot: true,
    port: 1209,
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
