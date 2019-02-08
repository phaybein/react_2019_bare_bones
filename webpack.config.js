const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader, // SPLIT CSS INTO SEPERATE FILE
          {
            loader: 'css-loader', // RESOLVE @IMPORT
            options: {
              // url: false,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', // MUST HAVE TO USE AUTOPREFIXER
            options: {
              plugins: [
                require('autoprefixer') // ADD VENDOR PREFIX
              ]
            }
          },
          {
            loader: 'sass-loader', // COMPILE SASS TO CSS
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader', // IMPORT FILES
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: 'source-map'
};
