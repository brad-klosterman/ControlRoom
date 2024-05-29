const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const is_local = process.env.APP_ENVIRONMENT === 'local';

module.exports = env => {
  const getEnvFilePath = () => {
    if (env.prod) {
      return './.env.prod';
    }

    if (env.stage) {
      return './.env.stage';
    }

    if (env.development) {
      return './.env.development';
    }

    return './.env';
  };

  return {
    mode: env.prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
      path: __dirname + '/dist/',
      publicPath: '/',
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
    },
    resolve: {
      modules: ['node_modules', path.resolve(__dirname, 'src')],
      alias: {
        src: path.resolve(__dirname, 'src'),
        codegen: path.resolve(__dirname, 'src/apollo/codegen'),
        images: path.resolve(__dirname, 'src/static/images'),
        "@permissions":  path.resolve(__dirname, 'src/app.state/permissions'),
        "@customers":  path.resolve(__dirname, 'src/apps/customers/'),
        "@admin":  path.resolve(__dirname, 'src/apps/admin/'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
          },
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpe?g|gif|ico)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    devtool: is_local ? 'source-map' : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
      }),
      new MiniCssExtractPlugin(),
      new Dotenv({
        path: getEnvFilePath(),
      }),
    ],
  };
};
