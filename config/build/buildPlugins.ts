import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

// Деструктурировать можно как таким образом как здесь, так и явным const {mode, paths} = options; как в buildWebpack.ts
export function buildPlugins({ mode, paths }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins']  = [
    new HtmlWebpackPlugin({ template: paths.html }),
  ];

  if(isDev) {
    plugins.push(new webpack.ProgressPlugin())
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  return plugins;
}
