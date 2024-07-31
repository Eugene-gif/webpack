import webpack, { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

// TODO: Деструктурировать можно как таким образом как здесь, так и явным const {mode, paths} = options; как в buildWebpack.ts
export function buildPlugins({ mode, paths, analyzer, platform }: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins']  = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
  ];

  if(isDev) {
    plugins.push(new webpack.ProgressPlugin());
    // Выносим проверку типов в отдельный процесс, не нагружая сборку
    plugins.push(new ForkTsCheckerWebpackPlugin());
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }));
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
