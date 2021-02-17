/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container
  .ModuleFederationPlugin;
const path = require('path');

module.exports = (config, context) => {
  return {
    entry: './src/main',
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 4201,
    },
    output: {
      publicPath: 'auto',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    optimization: {
      // Only needed to bypass a temporary bug
      runtimeChunk: false,
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
        name: 'reactapp1',
        filename: 'remoteEntry.js',
        exposes: {
          './Logged': './src/Logged',
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
};
