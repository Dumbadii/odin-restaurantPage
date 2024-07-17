const path = require('path');
const {title} = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Restaurant Page',
    template: './src/index.html',
    })
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|svg|png|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|otf|ttf|eot)$/i,
        type: 'asset/resource',
      },
      {

      }
    ]
  }
}
