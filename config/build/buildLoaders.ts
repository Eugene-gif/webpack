import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const cssLoadersWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoadersWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const tsLoader = {
    // ts-loader умеет работать с JSX
    // Если бы мы не использовали ts, то нужен был бы babel-loader
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    // порядок имеет значение
    scssLoader, 
    tsLoader
  ]
}