/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;
const path = require('path');

module.exports = {
  entry: './src/main',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainapp',
      remotes: {
        reactapp1: 'reactapp1@http://localhost:4201/remoteEntry.js',
      },
      shared: [
        'react',
        'react-dom',
        '@microfrontend-react-nx-app/auth-provider',
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
