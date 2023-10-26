// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, options) => {
  const isDevelopment = options.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
          type: isDevelopment ? 'asset/resource' : 'asset',
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassingOnDebug: true,
                disable: true,
              },
            },
          ],
        },
      ],
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
      static: path.join('./', 'dist'),
      compress: true,
      port: 8564,
      hot: true,
    },
    resolve: {                                                     
      extensions: ['*', '.js', '.jsx'],
    },
    performance: {
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        name: 'index.html',
        inject: false,
        template: './dist/index.html',
      }),
    ],
  };
};
