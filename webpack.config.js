const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (_env, argv) {
  const isDevelopment = argv.mode !== 'production';

  return {
    entry: './src/index.tsx',
    devtool: isDevelopment && 'inline-source-map',
    mode: isDevelopment && 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)/,
          loader: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
    },
  };
};
